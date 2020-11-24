/**
 * 求两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const arr = []
    for (const s of set1) {
        if (set2.has(s)) {
            arr.push(s)
        }
    }
    return arr
};

console.info(intersection([1, 2, 2, 1], [2, 2]))