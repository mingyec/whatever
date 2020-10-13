/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 计算二叉树的直径
 * 本质上是计算左右子树深度和
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = 0;
    const fn = node => {
        // 叶子节点直径为0
        if (node === null) return 0;
        const l = fn(node.left);
        const r = fn(node.right);
        max = Math.max(max, l + r);
        return Math.max(l, r) + 1;
    }
    fn(root);
    return max;
};