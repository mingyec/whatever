// 给定一个整数数组，返回一个数组，其中 output[i] 等于自身以外的所有元素的乘积，要求时间复杂度为 O(n)
// 输入: [1,2,3,4]
// 输出: [24,12,8,6]
/**
 * 除自身以外数组的乘积
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length;
    const left = new Int32Array(len);
    const right = new Int32Array(len);
    left[0] = 1;
    right[len - 1] = 1;

    // 累积左侧乘积
    for (let i = 1; i < len; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    // 累积右侧乘积
    for (let i = len - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }
    return nums.map((val, index) => left[index] * right[index])
};