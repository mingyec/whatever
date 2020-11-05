/**
 * 验证回文串
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // 去除无用
    s = s.replace(/[^0-9A-Za-z]/g, '').toLowerCase()
    // 定义头尾指针
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        // 都非空格
        if (s[start] !== s[end]) {
            return false
        }
        start++;
        end--
    }
    return true;
};

isPalindrome("A man, a plan, a canal: Panama")