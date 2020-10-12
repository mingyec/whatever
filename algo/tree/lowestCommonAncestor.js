/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * 查找二叉树的最近公共祖先
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ans = null;
    const fn = (root) => {
        if (root === null) return false;
        const l = fn(root.left)
        const r = fn(root.right)
        // 计算当前节点是否匹配目标节点之一
        const isEqual = (root.val === p.val || root.val === q.val);

        /* 
            第一种情况，左子树中匹配到目标节点，且右子树也匹配到了目标节点
            第二种情况，当前节点匹配到了目标节点之一，且左或右匹配到了另一个节点（所有节点的值都是唯一的）
        */
        if ((l && r) || (isEqual && (l || r))) {
            ans = root;
        }
        // 判断子节点是否存在匹配，或者当前节点匹配
        return l || r || isEqual
    }
    fn(root);
    return ans;
};

lowestCommonAncestor = function (root, p, q) {
    let ans = null;
    const fn = function (root) {
        if (root === null) return false;
        const l = fn(root.left);
        const r = fn(root.right);
        const isEqual = root.val === p.val || root.val === q.val;
        if ((l && r) || (isEqual && (l || r))) {
            ans = root;
        }
        return l || r || isEqual;
    }
    fn(root)
    return ans;
}

lowestCommonAncestor = function (root, p, q) {
    // root为空，或直接等于p或q时直接返回当前节点
    if (root === null || root === p || root === q) {
        return root
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left === null) {
        return right
    }
    if (right === null) {
        return left;
    }
    return root;
}