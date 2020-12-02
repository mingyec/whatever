/**
 * 乘积最大子数组(连续子数组)
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (!nums.length) return 0;
    const resMax = [nums[0]];
    const resMin = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        // 要么自成一派，要么与前面的合并
        resMax[i] = Math.max(resMax[i - 1] * nums[i], Math.max(nums[i], resMin[i - 1] * nums[i]));
        resMin[i] = Math.min(resMin[i - 1] * nums[i], Math.min(nums[i], resMax[i - 1] * nums[i]))
    }
    return Math.max(...resMax);
};