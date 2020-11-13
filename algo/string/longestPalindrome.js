/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0,
        end = 0;
    for (let i = 0; i < s.length; i++) {
        // 以s[i]为中心的回文串
        let s1 = palindrome(s, i, i);
        // 以s[i]和s[i + 1]为中心的最长回文子串
        let s2 = palindrome(s, i, i + 1);
        let len = Math.max(s1, s2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
};

/**
 * 
 * @param {string} s 
 * @param {number} l 
 * @param {number} r 
 */
const palindrome = function (s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        // 两边展开
        l--;
        r++;
    }
    return r - l - 1;
}

console.info(longestPalindrome("cbbd"))