const tb = new Map();
/**
 * 斐波那契数列
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    if (N <= 1) {
        tb.set(N, N);
        return N
    }
    let n1, n2;
    if (tb.has(N - 1)) {
        n1 = tb.get(N - 1)
    } else {
        n1 = fib(N - 1);
        tb.set(N - 1, n1);
    }
    if (tb.has(N - 2)) {
        n2 = tb.get(N - 2)
    } else {
        n2 = fib(N - 2);
        tb.set(N - 2, n2);
    }
    return n1 + n2;
};

console.info(fib(3))