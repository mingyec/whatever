/**
 * 括号生成，
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    const fn = (me, left, right) => {
        // 左右括号都已用完
        if (left === n && right === n) {
            result.push(me);
            return
        }

        // 左括号还未用完
        if (left < n) {
            fn(me + '(', left + 1, right);
        }

        // 右括号还未用完，且左括号比右括号多
        if (right < n && left > right) {
            fn(me + ')', left, right + 1);
        }
    }
    fn('', 0, 0);
    return result;
};

console.info(generateParenthesis(0))