/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 相同的树
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // 都为空节点
    if (!p && !q) {
        return true;
    }
    // p为空 或 q为空
    if (!p || !q) {
        return false;
    }
    // 当前节点相同，且子节点都相同
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};