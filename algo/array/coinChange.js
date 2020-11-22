/**
 * 零钱兑换
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const map = new Map();
    const fn = n => {
        // base case
        if (n === 0) return 0;
        if (n < 0) return -1;
        let res = Number.MAX_SAFE_INTEGER;
        for (const coin of coins) {
            const offset = n - coin;
            let sub;
            // 查询备忘录
            if (map.has(offset)) {
                sub = map.get(offset);
            } else {
                sub = fn(offset);
                map.set(offset, sub);
            }
            // 子问题无解
            if (sub === -1) continue;
            res = Math.min(res, sub + 1);
        }
        return res !== Number.MAX_SAFE_INTEGER ? res : -1;
    }
    return fn(amount);
};