const res = [];
/**
 * 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const track = [];

    fn(nums, track);
    return res;
};

/**
 * 
 * @param {Array} nums 
 * @param {Array} track 
 */
const fn = (nums, track) => {
    if (track.length === nums.length) {
        res.push(track.concat());
        return;
    }

    for (const item of nums) {
        // 排除不合法的选择，对已存在的值不进入排列
        if (track.includes(item)) {
            continue
        }
        // 做选择
        track.push(item);
        // 进入下一层
        fn(nums, track);
        // 取消选择
        track.pop();
    }
}

console.info(permute([1]))