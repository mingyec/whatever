/**
 * 在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const result = [-1, -1]
    if (!nums.length) return result;
    let left = 0;
    let right = nums.length - 1;
    // 处理左边界
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const val = nums[mid];
        if (val === target) {
            right = mid - 1;
        } else if (val < target) {
            left = mid + 1;
        } else if (val > target) {
            right = mid - 1;
        }
    }
    if (left >= nums.lengt || nums[left] !== target) {
        result[0] = -1
    } else {
        result[0] = left;
    }
    // 重置
    left = 0,
        right = nums.length - 1;
    // 处理右边界
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const val = nums[mid];
        if (val === target) {
            left = mid + 1;
        } else if (val < target) {
            left = mid + 1;
        } else if (val > target) {
            right = mid - 1;
        }
    }
    if (right < 0 || nums[right] !== target) {
        result[1] = -1
    } else {
        result[1] = right;
    }
    return result;
};

console.info(searchRange([5, 7, 7, 8, 8, 10], 8))