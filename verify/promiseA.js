/* promise A+ 规范  */

/**
 * promise有三个状态，分别是：
 *  - pending 可以切换为以下两个状态之一
 *  - fulfilled 不能切换状态，必须有个不可变的value
 *  - rejected 不能切换状态，必须有个不可变的reason
 */

const PENDING = 'pengding';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise() {
    this.state = PENDING;
    this.result = null;
    this.callbacks = [];
}

/**
 * 
 * @param {function} onFulfilled 
 * @param {function} onRejected 
 * @returns {Promise}
 */
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
        let callback = {
            onFulfilled,
            onRejected,
            resolve,
            reject
        }

        if (this.state === PENDING) {
            this.callbacks.push(callback);
        } else {
            setTimeout(() => handleCallback(callback, this.state, this.resolve), 0);
        }
    })
}

// 转换状态函数
const transition = (promise, state, result) => {
    // 非pending状态不可转换
    if (promise.state !== PENDING) return
    promise.state = state;
    promise.result = result;
}

// 回调函数处理
const handleCallback = (callback, state, result) => {
    const {
        onFulfilled, onRejected, resolve, reject
    } = callback;
    try {
        if (state = FULFILLED) {
            typeof onFulfilled === 'function' ? resolve(onFulfilled(result)) : resolve(result);
        } else {
            typeof onRejected === 'function' ? reject(onRejected(result)) : reject(result);
        }
    } catch (error) {
        reject(error)
    }
}