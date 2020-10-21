/**
 * 寻找重复数
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        // 统计小于mid的值
        let cnt = 0;
        for (const num of nums) {
            if (num <= mid) {
                cnt += 1;
            }
        }

        if (cnt > mid) {
            // 重复元素位于区间[left, mid];
            right = mid - 1;
        } else if (cnt <= mid) {
            left = mid + 1;
        }
    }
    return left;
};

console.info(findDuplicate([1, 3, 4, 2, 2]))