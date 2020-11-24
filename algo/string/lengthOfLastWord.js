/**
 * 最后一个单词长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (!s) {
        return 0;
    }
    s = s.trim()
    let res = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        // 空格
        if (s[i] === ' ') {
            return res;
        }
        res++;
    }
    return res;
};

console.info(lengthOfLastWord("Hello World"))