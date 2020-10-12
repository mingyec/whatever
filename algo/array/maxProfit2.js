/**
 * 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 小于两天的时候，不需要买入卖出，利润为0
    if (prices <= 1) return 0;

    let result = 0; // 最终利润
    for (let i = 1; i < prices.length; i++) {
        const p = prices[i]; // 当前价格
        const preP = prices[i - 1]; // 上一天的价格
        if (p > preP) {
            result += p - preP;
        }
    }
    return result;
};

console.info(maxProfit([1, 2, 3, 4, 5]))