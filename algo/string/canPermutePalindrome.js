/**
 * 回文排列
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
    const set = new Set();
    for (const char of s) {
        if (set.has(char)) {
            set.delete(char);
        } else {
            // 不存在则推入
            set.add(char);
        }
    }
    return set.size <= 1;
};