/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉树的最大深度计算
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let a = 0;
    const fn = function (node, depth) {
        if (!node) {
            return
        }
        // 叶子节点则进行深度比较
        if (!node.left && !node.right) {
            a = Math.max(a, depth);
        }

        fn(node.left, depth + 1)
        fn(node.right, depth + 1)
    }
    fn(root, 1);
    return a;
};

maxDepth = function (root) {
    if (root === null) {
        return 0
    }
    let max = 0;
    const fn = (r, level) => {
        // 叶子节点
        if (!r.left && !r.right) {
            max = Math.max(max, level);
        }
        r.left && fn(r.left, level + 1)
        r.right && fn(r.right, level + 1);
    }
    fn(root, 1)
    return max;
}