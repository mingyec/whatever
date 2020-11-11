/**
 * 字符串的排列
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const window = new Map();
    const need = new Map();
    for (const s of s1) {
        need.set(s, need.has(s) ? need.get(s) + 1 : 0);
    }
    let left = 0,
        right = 0;
    let valid = 0;
    while (right < s2.length) {
        const c = s2[right];
        // 扩大窗口
        right++;
        if (need.has(c)) {
            window.set(c, window.has(c) ? window.get(c) + 1 : 0);
            // 拥有的字符相等，则表示找到一个
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        // 左侧窗口收缩
        while (right - left >= s1.length) {
            // 是否找到合法子串
            if (valid === need.size) {
                return true;
            }
            const d = s2[left];
            left++;
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1)
            }
        }
    }

    return false;
};