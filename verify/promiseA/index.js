// Promise 状态
var STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
}

/**
 * promise 构造函数
 * @param {Function} fn
 */
function _Promise (fn) {
    this.state = STATE.PENDING;
    this.result = null;
    this.callbacks = [];

    var me = this;
    var onFulfilled = function(value) {
        transition(me, STATE.FULFILLED, value)
    }
    var onRejected = function(reason) {
        transition(me, STATE.REJECTED, reason)
    }

    var ignore = false;
    var resolve = function(value) {
        if (ignore) return;
        ignore = true;
        resolvePromise(me, value, onFulfilled, onRejected)
    }
    var reject = function (reason) {
        if (ignore) return;
        ignore = true;
        onRejected(reason);
    }

    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
}


/**
 * then 方法可以被执行多次，所以得有个 callbacks 队列缓存回调
 * 举个例子，实例化一个 promise ，分别在多个地方注册它的 then 回调
 * @param {*} onFulfilled 
 * @param {*} onRejected 
 * @returns {_Promise}
 */
_Promise.prototype.then = function (onFulfilled, onRejected) {
    return new _Promise(function(resolve, reject) {
        // 回调对象
        var callback = {
            onFulfilled, onRejected, resolve, reject
        }

        if (this.state === STATE.PENDING) {
            this.callbacks.push(callback)
        } else {
            setTimeout(() => handleCallback(callback, this.state, this.result), 0);
        }
    })
}

function resolvePromise (promise, result, resolve, reject) {
    // result 是当前 promise 本身，就抛出 typeerror 错误
    if (result === promise) {
        var reason = new TypeError('Can not fulfill promise with itself')
        return reject(reason);
    }

    // 如果是另一个 promise 则沿用它的 state & result
    if (result instanceof _Promise) {
        return result.then(resolve, reject);
    }

    // 判断是否是 thenable 对象
    if (result.then) {
        try {
            var then = result.then;
            if (typeof then === 'function') {
                return new _Promise(then.bind(result)).then(resolve, reject);
            }
        } catch (error) {
            return reject(error)
        }
    }

    resolve(result)
}

/**
 * 处理回调
 * @param {*} callback 
 * @param {string} state 
 * @param {*} result 
 */
function handleCallback(callback, state, result) {
    var onFulfilled = callback.onFulfilled;
    var onRejected = callback.onRejected;
    var resolve = callback.resolve;
    var reject = callback.reject;

    try {
        if (state === STATE.FULFILLED) {
            // 完成
            typeof onFulfilled === 'function' ?
                resolve(onFulfilled(result)) : resolve(result);
        } else if (state === STATE.REJECTED) {
            typeof onRejected === 'function' ? 
                reject(onRejected(result)) : reject(result)
        }
    } catch (error) {
        reject(error)
    }
}

/**
 * 状态转移
 * @param {_Promise} promise 
 * @param {string} state 
 * @param {*} result 
 */
function transition(promise, state, result) {
    if (promise.state !== STATE.PENDING) {
        return
    }
    promise.state = state;
    promise.result = result;
    setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0);
}

/**
 * 执行全部的任务队列
 * @param {Array} callbacks 
 * @param {string} state 
 * @param {*} result 
 */
function handleCallbacks (callbacks, state, result) {
    while (callbacks.length) {
        handleCallback(callbacks.shift(), state, result)
    }
}