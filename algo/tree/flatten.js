/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (root === null) return;

    flatten(root.left);
    flatten(root.right);

    const {
        left, right
    } = root;

    // 左子树拼接到右子树
    root.left = null;
    root.right = left;

    // 原右子树拼接到当前右子树的末端
    let p = root;
    while (p.right !== null) {
        p = p.right;
    }
    p.right = right;
};