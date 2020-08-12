/**
 * 求众数，多数元素（众数）是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 其中n === 数组length
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map();
    for (const num of nums) {
        // 不存在则设置key值
        if (!map.has(num)) {
            map.set(num, 0);
        }
        // 累加
        map.set(num, map.get(num) + 1);
    }
    const halfN = nums.length / 2;
    for (const [key, val] of map) {
        if (val > halfN) {
            return key;
        }
    }
};