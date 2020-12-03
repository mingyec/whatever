/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉树的所有路径
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) {
        return []
    }
    const res = [];
    const fn = (r, s) => {
        s = s ? s + '->' + r.val : r.val + '';
        // 左右节点为空，证明是叶子节点
        if (!r.left && !r.right) {
            res.push(s)
            return
        }

        r.left && fn(r.left, s)
        r.right && fn(r.right, s)
    }
    fn(root, '')
    return res;
};