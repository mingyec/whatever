/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 在每个树行中找最大值
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return [];
    const res = [];
    const fn = (r, level) => {
        if (res[level] === undefined) {
            // 如果当前层级不存在值，则推入
            res[level] = r.val;
        } else {
            // 如果当前层级已经存在值，则与当前值比较后存入最大的值
            res[level] = Math.max(r.val, res[level]);
        }

        // 遍历
        r.left && fn(r.left, level + 1);
        r.right && fn(r.right, level + 1);
    }
    fn(root, 0);
    return res;
};