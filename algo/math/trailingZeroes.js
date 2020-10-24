/**
 * 阶乘后的零
 * 给定一个整数 n，返回 n! 结果尾数中零的数量
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let res = 0;
    let divisor = 5;
    while (divisor <= n) {
        res += Math.floor(n / divisor);
        divisor *= 5;
    }
    return res;
};

console.info(trailingZeroes(6))