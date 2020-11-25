/**
 * 给定一个整数数组，找到从三个整数中产生的最大乘积。
 * @param {number[]} arr 
 * @returns {number}
 */
const maximumProduct = arr => {
    const size = arr.length;
    if (!size) return 0;
    // 长度小于3
    if (size < 3) {
        return arr.reduce((acc, val) => acc * val, 1);
    }
    // 排序
    arr.sort((a, b) => b - a);

    // 存在负数，与都为正数的情况
    return Math.max(arr[0] * arr[1] * arr[2], arr[0] * arr[size - 1] * arr[size - 2])
}