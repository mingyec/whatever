/**
 * 最小覆盖子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const need = new Map();
    const window = new Map();
    // 添加need字符
    for (const char of t) {
        need.set(char, need.has(char) ? need.get(char) + 1 : 0);
    }

    let left = 0,
        right = 0;
    // 用于表示窗口中满足need条件的字符个数
    let valid = 0;

    // 记录最小子串的起始索引及长度
    let start = 0,
        len = Number.MAX_SAFE_INTEGER;

    // 滑动窗口
    while (right < s.length) {
        // 即将进入窗口的字符
        const c = s[right];
        // 扩大窗口
        right++;
        // 窗口内数据更新
        if (need.has(c)) {
            window.set(c, window.has(c) ? window.get(c) + 1 : 0);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        // 判断左侧窗口是否要收缩
        while (valid === need.size) {
            // 更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            // 即将移出窗口的字符
            const d = s[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的更新
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }

    return len === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len);
};