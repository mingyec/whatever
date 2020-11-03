/**
 * 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    for (; slow < nums.length; slow++) {
        nums[slow] = 0

    }
};

const arr = [0, 1, 0, 3, 12];

moveZeroes(arr)