/**
 * 计算 x 的 n 次幂函数。
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    // 基本情况
    if (n === 0) {
        return 1
    }
    if (n === 1) {
        return x;
    }
    const y = myPow(x, Math.floor(n / 2));
    return n % 2 === 1 ? y * x : y;
};