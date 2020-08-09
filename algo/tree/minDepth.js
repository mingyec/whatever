/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) return 0;
    const left = minDepth(root.left);
    const right = minDepth(root.right);
    return (!root.left || !root.right) ? 1 + left + right : Math.min(left, right) + 1;
};

minDepth = function (root) {
    if (!root) return 0;
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;

    const left = minDepth(root.left);
    const right = minDepth(root.right);
    return Math.min(left, right) + 1;
}