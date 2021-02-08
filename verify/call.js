/* 
    模拟Function.prototype.call
    实现：
    1. call改变this指向
    2. 执行方法
    3. 支持多个参数
    4. 传入的context，即this可为null，为null时指向window对象
    5. 函数可以返回值
*/

/* 兼容node环境，测试需要 */
var window = {};

/* 核心实现 */
Function.prototype.call2 = function(context) {
    context = context || window;
    var args = [];
    // 取得传入参数，排除第一个context对象
    for (let i = 1; i < arguments.length; i++) {
        args.push("'" + arguments[i] + "'")
    }
    // context 复制方法
    context.fn = this;
    // 处理多参数问题
    var fnStr = 'context.fn(' + args.join(',') + ')';
    // 执行
    var res = eval(fnStr)
    // 删除context上的fn
    delete context.fn;

    // 返回值
    return res;
}

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

console.info(bar.call2(null, 'name', 'age'))
