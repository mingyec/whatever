/**
 * 有效括号判断
 * @param {string} s
 * @return {boolean}
 */
isValid = function(s) {
    const size = s.length;
    // 奇数则肯定无效
    if (size % 2) {
        return false
    }
    const arr = []
    for (let i = 0; i < size; i++) {
        const key = s[i];
        switch (key) {
            // 左括号一律推入栈
            case '{':
            case '[':
            case '(':
                arr.push(key);
                break;
            case '}':
                if (arr.pop() !== '{') {
                    return false
                }
                break;
            case ']':
                if (arr.pop() !== '[') {
                    return false
                }
                break;
            case ')':
                if (arr.pop() !== '(') {
                    return false
                }
                break;

            default:
                break;
        }
    }
    return arr.length === 0;
}

console.info(isValid("{}{}"))