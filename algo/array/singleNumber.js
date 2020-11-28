/** 只出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const map = new Map();
    for (const val of nums) {
        map.set(val, map.has(val) ? map.get(val) + 1 : 1);
    }
    let res;
    map.forEach((val, key) => {
        if (val === 1) {
            res = key
            return res;
        }
    })
    return res;
};