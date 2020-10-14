/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 填充每个节点的下一个右侧节点指针
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return null;
    const fn = (l, r) => {
        if (l === null || r === null) return;
        l.next = r;
        // 相同父节点下的左右节点连接
        fn(l.left, l.right);
        fn(r.left, r.right);

        // 不同父节点下的左右节点连接
        fn(l.right, r.left);
    }
    fn(root.left, root.right)
    return root;
};