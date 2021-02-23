/* 
    模拟 instanceOf 关键字 
    关键点：right 是否在 left 的原型链上
*/
/**
 * 
 * @param {object} left 
 * @param {function} right 
 */
function mock_instanceOf(left, right) {
    var rightProto = right.prototype;
    var leftProto = left.__proto__;
    while (true) {
        // 如果原型对象为 null，则为 false
        if (leftProto === null) {
            return false
        }
        if (leftProto === rightProto) {
            return true
        }
        leftProto = leftProto.__proto__;
    }
}