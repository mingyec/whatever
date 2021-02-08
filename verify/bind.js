/* 
    模拟实现Function.prototype.bind
    1. 指定context运行，可传入参数
    2. 返回一个函数
    3. 当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效
*/

/**
 * 
 * @param {*} context 
 * @returns {function}
 */
Function.prototype.bind2 = function(context) {
    if (typeof this !== 'function') {
        throw new Error('Function.prototype.bind error')
    }
    var me = this;
    var args = Array.prototype.slice.call(arguments, 1);
    
    var fn = function() {
        var args1 = Array.prototype.slice.call(arguments);
        return me.apply(this instanceof fn ? this : context, args.concat(args1));
    }
    fn.prototype = this.prototype;
    return fn;
}

// 示例
var foo = {
    value: 'foo'
}

function bar(name, age) {
    this.xx = 'xx'
    console.info(this.value)
}

var BindFoo = bar.bind2(foo);
var ins = new BindFoo('john', '12');
console.info(ins)