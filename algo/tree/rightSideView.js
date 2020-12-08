/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉树的右视图
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    const res = [];
    const fn = (r, level) => {
        // 当前层级没有存入节点
        if (res[level] === undefined) {
            res.push(r.val);
        }

        // 右节点存在则使用右节点
        if (r.right) {
            fn(r.right, level + 1)
        }
        // 右节点不存在，则使用左节点
        if (r.left) {
            fn(r.left, level + 1)
        }
    }
    fn(root, 0);
    return res;
};