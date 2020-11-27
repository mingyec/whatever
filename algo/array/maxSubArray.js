/* 
输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/
/**
 * 最大子序和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const size = nums.length;
    if (!size) return 0;

    // 存储每个结果的最大值
    const dp = [];
    // 基础情况
    dp[0] = nums[0]
    // 状态转移方程
    for (let i = 1; i < size; i++) {
        // 当前「连续子数组」的最大和
        // 要么取自身值，要么与上一个「连续子数组」的和合并
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
    }
    // 从众多和之中取最大就是答案
    return Math.max(...dp);
};