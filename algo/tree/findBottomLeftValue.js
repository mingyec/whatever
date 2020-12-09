/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 找最底最左的值
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    const res = [];
    const fn = (r, level) => {
        // 如果当前层级没有值
        if (res[level] === undefined) {
            // 缓存当前层级的值
            res[level] = r.val;
        }

        if (r.left) {
            fn(r.left, level + 1);
        }
        if (r.right) {
            fn(r.right, level + 1);
        }
    }
    fn(root, 0);
    return res[res.length - 1];
};