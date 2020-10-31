/**
 * 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number} 新的数组长度
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let slow = 0,
        fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }
    return slow + 1;
};

console.info(removeDuplicates([1, 2, 2, 3]))