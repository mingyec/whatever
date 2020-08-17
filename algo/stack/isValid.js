/**
 * 有效括号判断
 * @param {string} s
 * @return {boolean}
 */
isValid = function (s) {
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


isValid = function (s) {
    const map = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    const stack = [];
    for (const char of s) {
        if (!map[char]) {
            stack.push(char)
        } else if (!stack.length || map[char] !== stack.pop()) {
            return false
        }
    }
    return !stack.length
}

console.info(isValid("{}{}"))