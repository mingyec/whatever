/**
 * 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    for (const b of B) {

    }
};

// 暴力解法
merge = function(A, m, B, n) {
    // 合并数组
    for (let i = m, size = m + n; i < size; i++) {
        A[i] = B[i - size + n];
    }
    A.sort((a, b) => a - b);
}
const a = [1, 3, 4, 7, 0, 0, 0]
merge(a, 4, [2, 4, 5], 3)
console.info(a)