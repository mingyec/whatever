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
 * 对称二叉树求解
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const arr = []
    if (!root) {
        return true;
    }
    // 维护队列
    const q = [root];
    while (q.length > 0) {
        // 缓存当前队列长度
        const len = q.length;
        // 当前层级预先进队
        arr.push([])

        for (let i = 0; i < len; i++) {
            const node = q.shift()
            if (node) {
                arr[arr.length - 1].push(node.val);
                q.push(node.left);
                q.push(node.right)
            } else {
                arr[arr.length - 1].push('null');
            }
        }

        const levelArr = arr[arr.length - 1];

        // 反转数组
        const rArr = levelArr.slice().reverse();
        if (rArr.join('') !== levelArr.join('')) {
            // 字符串相等，则是证明同层级镜像，否则非镜像树
            return false
        }
    }
    return true
};

isSymmetric = function (root) {
    if (!root) {
        return true
    }
    return checkTree(root.left, root.right)
}

function checkTree(left, right) {
    if (!left && !right) {
        return true
    }
    if (!right || !left) {
        return false
    }
    if (left.val !== right.val) {
        return false;
    }
    return checkTree(left.left, right.right) && checkTree(left.right, right.left);
}