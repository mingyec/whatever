/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 在二叉树中分配硬币
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function (root) {
    let num = 0;
    const fn = node => {
        if (node === null) return 0;
        const l = fn(node.left)
        const r = fn(node.right)
        num += Math.abs(r) + Math.abs(l);
        return node.val - 1 + l + r
    }
    fn(root)
    return num
};