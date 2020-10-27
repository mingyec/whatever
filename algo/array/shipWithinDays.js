/**
 * 在 D 天内送达包裹的能力
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
    let left = 1;
    // 累计所有重量
    let right = weights.reduce((acc, val) => acc + val, 0);
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (canFinish(weights, mid, D)) {
            right = mid;
        } else {
            left = mid + 1
        }
    }
    return left;
};

const canFinish = (weights, max, D) => {
    let ship = max; // 累计载重
    for (const w of weights) {
        // 当前货物比最大载重大，直接退出
        if (w > max) {
            return false;
        }
        if (ship < w) {
            ship = max;
            D--;
        }
        ship -= w;
    }
    return D > 0;
}
// canFinish([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, 5);
console.info(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))