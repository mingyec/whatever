/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    const res = [];
    if (!root) {
        return res;
    }

    /**
     * 
     * @param {TreeNode} r
     * @param {number} count 路径和
     * @param {string} path 遍历过的节点，形式为：1#2#5
     */
    const fn = (r, count, path) => {
        const val = r.val;
        // 当前路径和为0，则证明已满足条件
        if (count - val === 0) {
            // 左右子树都不存在
            if (!r.left && !r.right) {
                path = path ? path + '#' + val : val + ''
                res.push(path.split('#'));
                return
            }
        }

        // 记录节点
        r.left && fn(r.left, count - val, path ? path + '#' + val : val + '');
        r.right && fn(r.right, count - val, path ? path + '#' + val : val + '');
    }
    fn(root, sum, '');
    return res;
};