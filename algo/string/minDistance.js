/**
 * 编辑距离
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const map = new Map();
    const fn = (i, j) => {
        const key = `${i}-${j}`;
        if (map.has(key)) {
            return map.get(key);
        }
        // 基本情况，i或j越过了第一个字符
        if (i === -1) return j + 1;
        if (j === -1) return i + 1;

        // 如果单词相同，不做任何操作直接跳过
        if (word1[i] === word2[j]) {
            map.set(key, fn(i - 1, j - 1));
        } else {
            // 三个动作中取 编辑距离最小的
            map.set(key, Math.min(
                fn(i, j - 1) + 1, // 插入
                fn(i - 1, j) + 1, // 删除
                fn(i - 1, j - 1) + 1 // 替换
            ));
        }

        // 三个动作中取 编辑距离最小的
        return map.get(key);
    }
    // 从字符串尾部开始遍历
    return fn(word1.length - 1, word2.length - 1);
};