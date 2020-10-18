/**
 * 计算x的平方根，返回只保留整数部分
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) return x;
    let left = 0,
        right = x;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const val = mid * mid;
        // 只要出现小数，则符合运算结果
        if (val === x) {
            return mid;
        }
        // 当前值比目标值小，但下一个值比目标值大，则表示当前值
        if (val < x && (mid + 1) * (mid + 1) > x) return mid;

        if (val < x) {
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }
    return left;
};

console.info(mySqrt(8))