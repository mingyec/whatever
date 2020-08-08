/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递增顺序查找树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    if (root === null) return null;
    const arr = [];
    const fn = r => {
        r.left && fn(r.left)
        arr.push(r.val)
        r.right && fn(r.right)
    }
    fn(root);
    // 重新生成树
    const result = new TreeNode(0);
    let node = result;
    for (const val of arr) {
        node.right = new TreeNode(val);
        node = node.right;
    }
    return result.right;
};