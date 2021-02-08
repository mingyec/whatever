/* 
    模拟Function.prototype.apply的实现
    1. 传入两个参数，第一个为指定运行对象，第二个为一个参数数组
    2. 执行该函数，支持返回值
    3. 支持传入null
*/

// 兼容node环境调试
var window = {};

/**
 * 
 * @param {*} context 
 * @param {Array} args 
 */
Function.prototype.apply2 = function(context, args) {
    context = context || window
    context.fn = this;
    var arr = [];
    var res;
    if (args) {
        for (let i = 0; i < args.length; i++) {
            arr.push("'" + args[i] + "'")
        }
        res = eval('context.fn(' + arr.join(',') + ')');
    } else {
        res = context.fn();
    }
    
    delete context.fn;

    return res;
}

// 示例
/* 测试示例 */
var foo = {
    value: 1
}

function bar(name, age) {
    console.info(this.value, name, age)
    return {
        value: this.value,
        name: name,
        age: age
    }
}

console.info(bar.apply2(foo, [1,2]))