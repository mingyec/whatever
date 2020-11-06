/**
 * 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1,
        p = nums1.length - 1;
    // 从后往前遍历
    while (p1 >= 0 && p2 >= 0) {
        nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
    }
    nums1.splice(0, p2 + 1, ...nums2.slice(0, p2 + 1))
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)