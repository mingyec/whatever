/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    // 缓存原数组
    this.source = nums.slice();
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.source;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    // 拷贝多一份
    const res = this.source.slice();
    const size = res.length;
    for (let i = 0; i < size; i++) {
        const current = randInt(i, size - 1);
        // 交换
        [res[i], res[current]] = [res[current], res[i]];
    }
    return res;
};

/**
 * 获取随机整数
 * @param {number} min 最小边界
 * @param {number} max 最大边界
 */
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);