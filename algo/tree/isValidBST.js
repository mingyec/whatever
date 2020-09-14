/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 验证二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    // 空树是二叉搜索树
    let pre = null;

    // 中序遍历
    const fn = (r) => {
        if (r === null) return true;
        const left = fn(r.left)
        if (!left) {
            // 左子树不满足则直接退出
            return false
        }

        // 前继节点存在，且比当前的根节点值还大，则退出
        if (pre && pre.val >= r.val) {
            return false
        }
        pre = r;
        return fn(r.right);
    }
    return fn(root);
};