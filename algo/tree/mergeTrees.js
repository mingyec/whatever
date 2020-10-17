/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 合并二叉树
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (!t1 && !t2) {
        return null;
    }
    let val;
    // t1存在或t2存在
    if (!t1 || !t2) {
        val = t1 ? t1.val : t2.val;
    } else {
        // 两者都存在
        val = t1.val + t2.val;
    }
    const root = new TreeNode(val);
    root.left = mergeTrees(t1 && t1.left, t2 && t2.left);
    root.right = mergeTrees(t1 && t1.right, t2 && t2.right);
    return root;
};