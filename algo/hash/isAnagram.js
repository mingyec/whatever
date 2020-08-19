/**
 * 有效的字母异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    const m1 = {};
    for (const k of s) {
        if (!m1[k]) {
            m1[k] = 0
        }
        m1[k] += 1
    }
    for (const k of t) {
        // 找不到对应的字母直接退出
        // 对应的字母计数小于0直接退出
        if (!m1[k] || m1[k] < 0) {
            return false
        }
        m1[k] -= 1
    }
    return true
};

isAnagram("anagram",
    "nagaram");