/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 寻找重复子树
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    // 结果集
    const res = [];
    // 空节点用字符串表示
    if (!root) return res;
    // 记录集
    const map = new Map();

    const fn = r => {
        // 空节点用字符串表示
        if (!r) return '#';
        // 获取左右节点值
        const left = fn(r.left);
        const right = fn(r.right);
        // 以后序遍历来表示树
        const tree = left + ',' + right + ',' + r.val;
        const mapTree = map.get(tree) || 0;
        // 记录中存在相同树时，则推入结果集
        if (mapTree === 1) {
            res.push(r);
        }
        map.set(tree, mapTree + 1);
        return tree;
    }
    fn(root)
    return res;
};