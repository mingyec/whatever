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
 * Encodes a tree to a single string.
 * 前序遍历序列化
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root === null) return '';
    let arr = []
    const fn = r => {
        if (r === null) {
            arr.push('x');
            return
        }
        arr.push(r.val);
        fn(r.left);
        fn(r.right)
    }
    return arr.join();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const arr = data.split(',');
    const fn = () => {
        // 弹出当前节点
        const str = arr.shift();
        // 当前节点为x，即null
        if (str === 'x' || str === undefined) {
            return null
        }
        // 构建当前节点
        const node = new TreeNode(str);
        // 构建左节点
        node.left = fn();
        // 构建右节点
        node.right = fn();
        return node
    }
    return fn();
};

deserialize = function (data) {
    const arr = data.split(',');
    const fn = () => {
        const str = arr.shift();
        if (str === 'x' || str === undefined) {
            return null;
        }
        const root = new TreeNode(str);
        root.left = fn();
        root.right = fn();
        return root;
    }
    return fn();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */