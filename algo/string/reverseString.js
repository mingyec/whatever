/**
 * 反转字符串
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let start = 0,
        end = s.length - 1;
    while (start < end) {
        // 交换前后
        const val = s[start];
        s[start] = s[end];
        s[end] = val;
        start++;
        end--
    }
};

reverseString(["H", "a", "n", "n", "a", "h"])