/**
 * 阶乘函数后K个零
 * @param {number} K
 * @return {number}
 */
var preimageSizeFZF = function (K) {
    return rightRound(K) - leftRound(K) + 1;
};

const leftRound = target => {
    let l = 0,
        r = Number.MAX_SAFE_INTEGER;
    while (l < r) {
        const mid = Math.floor(l + (r - l) / 2);
        // 计算mid值对应的阶乘数，有多少个0
        const val = trailingZeroes(mid);
        if (val === target) {
            r = mid;
        } else if (val < target) {
            l = mid + 1;
        } else if (val > target) {
            r = mid;
        }
    }
    return l;
}

// 搜索右侧边界
const rightRound = target => {
    let l = 0,
        r = Number.MAX_SAFE_INTEGER;
    while (l < r) {
        const mid = Math.floor(l + (r - l) / 2);
        // 计算mid值对应的阶乘数，有多少个0
        const val = trailingZeroes(mid);
        if (val === target) {
            l = mid + 1;
        } else if (val < target) {
            l = mid + 1;
        } else if (val > target) {
            r = mid;
        }
    }
    return l - 1;
}

/**
 * 阶乘后的零
 * 给定一个整数 n，返回 n! 结果尾数中零的数量
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let res = 0;
    let divisor = 5;
    while (divisor <= n) {
        res += Math.floor(n / divisor);
        divisor *= 5;
    }
    return res;
};

console.info(preimageSizeFZF(0));