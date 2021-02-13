/* 
    模拟实现 new
    1. new的结果是一个新对象，要返回一个新对象（实例化对象）
    2. 实例化对象的__proto__指向原型对象
    3. 构造函数是否有返回值，如果有且返回值是一个对象，则实例化的对象为该对象
*/

/**
 * 核心实现
 * @param {function} ctr 
 */
function New(ctr) {
    var obj = {};
    // 实例的__proto__指向构造函数的原型对象
    obj.__proto__ = ctr.prototype;
    // 将参数传递给构造函数
    var res = ctr.apply(obj, Array.prototype.slice.call(arguments, 1));
    return typeof res === 'object' ? res : obj;
}

// 示例
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.info(this.name)
}

var person = New(Person, 'john')

console.info(person)