/**
 * 三数之和
 * 求a+b+c=0的所有可能解
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return
    }

    const max = nums.length;
    nums.sort((a, b) => a - b)
    const result = []
    for (let a = 0; a < max - 2; a++) {
        if (nums[a] === nums[a - 1]) continue
        const av = nums[a];
        const map = {};
        for (let b = a + 1; b < max; b++) {
            const bv = nums[b];
            const cv = -(av + bv);
            // if (result.length) {
            //     const [x, y, z] = result[result.length - 1];
            //     if (y === bv && z === cv) continue;
            // }
            if (map[cv] !== undefined) {
                result.push([av, bv, cv])
            } else {
                map[bv] = 1;
            }
        }
    }
    return result;
};

console.info(threeSum([-1, 0, 1, 2, -1, -4]))