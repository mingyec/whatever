// 二叉树的遍历

/**
 * 树节点
 * @param {*} val 
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    const arr = [];

    const fn = node => {
        if (!node.val) {
            return
        }
        arr.push(node.val);
        fn(node.left);
        fn(node.right)
    }
    fn(root)
    return arr
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const arr = [];
    const fn = r => {
        if (!r) {
            return
        }
        fn(r.left);
        arr.push(r.val)
        fn(r.right);
    }
    fn(root)
    return arr
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    const arr = []
    const fn = r => {
        if (r && r.val) {
            fn(r.left);
            fn(r.right);
            arr.push(r.val)
        }
    }
    fn(root)
    return arr;
};

// 迭代：颜色标记法
postorderTraversal = function (root) {
    const arr = [];
    if (!root) return arr;

    const stack = [];
    stack.push({
        color: 'white',
        node: root
    })

    while (stack.length > 0) {
        const { color, node } = stack.pop();
        if (color === 'gray') {
            arr.push(node.val);
        } else {
            // 压入根
            stack.push({
                color: 'gray',
                node: node
            })
            // 压入右
            node.right && stack.push({
                color: 'white',
                node: node.right
            })
            // 压入左
            node.left && stack.push({
                color: 'white',
                node: node.left
            })
        }
    }
    return arr;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const queue = [root];
    const arr = []
    while (queue.length > 0) {
        arr.push([]);
        let i = 1;
        const qSize = queue.length;
        while (i <= qSize) {
            const node = queue.shift()
            arr[arr.length - 1].push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            i++;
        }
    }
};

levelOrder = function (root) {
    const arr = []
    if (!root) {
        return arr;
    }
    // 创建队列
    const q = [root];
    while (q.length > 0) {
        const len = q.length; // 缓存当前队列长度
        arr.push([]); // 当前层级预先进队
        for (let i = 1; i <= len; i++) {
            const node = q.shift();
            // 取当前层级节点，推入数组
            arr[arr.length - 1].push(node.val)
            // 如果左/右节点存在，则入队
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
    }
    return arr;
}