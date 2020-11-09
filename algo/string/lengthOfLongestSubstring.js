/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const window = {};
    let left = 0,
        right = 0;
    let res = 0;
    while (right < s.length) {
        // 取得字符串
        const c = s[right];
        // 进入窗口
        window[c] = window[c] ? window[c] + 1 : 1;
        // 扩大窗口
        right++;

        // 窗口内的值出现了重复，则进入左侧窗口收缩
        while (window[c] > 1) {
            const d = s[left];
            // 左侧窗口收缩
            left++;
            window[d]--;
        }
        res = Math.max(res, right - left);
    }
    return res
};