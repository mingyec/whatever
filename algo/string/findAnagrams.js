/**
 * 找到字符串中所有字母异位词
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const window = new Map();
    const need = new Map();
    for (const c of p) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 0);
    }
    let left = 0,
        right = 0;
    let valid = 0;
    const arr = []
    while (right < s.length) {
        const c = s[right];
        right++;
        // 窗口内数据更新
        if (need.has(c)) {
            window.set(c, window.has(c) ? window.get(c) + 1 : 0);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        // 左侧窗口，当窗口的长度大于等于p的长度时，进行收缩
        while (right - left >= p.length) {
            if (valid === need.size) {
                arr.push(left)
            }
            const d = s[left];
            left++;
            // 窗口内数据更新
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1)
            }
        }
    }
    return arr
};