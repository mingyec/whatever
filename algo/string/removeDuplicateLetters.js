/**
 * 去除重复字母
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    const map = new Map(); // 判重集合
    const stk = []; // 结果栈
    const count = {} // 记录字符串中字符的数量
    for (const c of s) {
        let val = count[c];
        count[c] = val ? val + 1 : 1;
    }
    console.info(count)
    for (const char of s) {
        // 每经过一个字符，都讲对应的计数减一
        count[char] = count[char] - 1;

        if (map.get(char)) {
            continue;
        }
        // 栈不为空
        // 且栈顶的字母比前面的小，pop前面的元素
        while (stk.length > 0 && stk[stk.length - 1] > char) {
            const top = stk[stk.length - 1];
            // const reg = new RegExp(top, 'g');
            // if (s.match(reg).length > 0) {
            //     break;
            // }
            if (count[top] === 0) {
                break
            }
            // 弹出栈顶，并标记不在栈中
            map.set(stk.pop(), false);
        }
        stk.push(char);
        map.set(char, true);
    }
    return stk.join('')
};

console.info(removeDuplicateLetters('bcabc'))