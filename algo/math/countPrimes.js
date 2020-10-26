/**
 * 计算质数
 * 统计所有小于非负整数 n 的质数的数量
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    const isPrim = Array(n).fill(true);
    for (let i = 2; i * i < n; i++) {
        // 是质数
        if (isPrim[i]) {
            // i的倍数不可能是质数
            for (let j = i * 2; j < n; j += i) {
                isPrim[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrim[i]) {
            count++
        }
    }
    return count
};

countPrimes(5)