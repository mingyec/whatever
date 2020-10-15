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
 * 从中序与后序遍历序列构造二叉树
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (!inorder.length) return null;
    const n = postorder.length;
    // 根节点 为后序遍历中的最后一个值
    const rootVal = postorder[n - 1];
    // 根节点在中序遍历中的下标
    const midIndex = inorder.indexOf(rootVal);
    // 创建根节点
    const root = new TreeNode(rootVal);
    // 左子树中、后序遍历数组
    const inorderLeftArr = inorder.slice(0, midIndex);
    const postorderLeftArr = postorder.slice(0, midIndex);
    // 构建左子树
    root.left = buildTree(inorderLeftArr, postorderLeftArr);

    // 右子树中、后序遍历数组
    const inorderRightArr = inorder.slice(midIndex + 1);
    const postorderRightArr = postorder.slice(midIndex, n - 1);
    // 构建右子树
    root.right = buildTree(inorderRightArr, postorderRightArr);

    return root;
};

// @repeat
buildTree = function (inorder, postorder) {
    if (!inorder.length) return null;
    const n = postorder.length;
    // 根节点值
    const rootVal = postorder[n - 1];
    // 根节点在中序遍历中的下标
    const i = inorder.indexOf(rootVal);
    // 创建根节点
    const root = new TreeNode(rootVal);
    // 中序左子树数组
    const inorderLeftArr = inorder.slice(0, i);
    // 后序左子树数组
    const postorderLeftArr = postorder.slice(0, i);
    // 中序右子树数组
    const inorderRightArr = inorder.slice(i + 1);
    // 后序右子树数组
    const postorderRightArr = postorder.slice(i, n - 1);

    root.left = buildTree(inorderLeftArr, postorderLeftArr);
    root.right = buildTree(inorderRightArr, postorderRightArr);
    return root;
}

/**
 * 从前序与中序遍历序列构造二叉树
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null;
    // 获取根节点的值
    const rootVal = preorder[0];
    // 获取中序数组中根节点的下标
    const i = inorder.indexOf(rootVal);
    // 创建根节点
    const root = new TreeNode(rootVal);
    // 中序遍历 左子树数组
    const inorderLeftArr = inorder.slice(0, i);
    // 前序遍历 左子树数组
    const preorderLeftArr = preorder.slice(1, i + 1);
    // 中序遍历 右子树数组
    const inorderRightArr = inorder.slice(i + 1);
    // 前序遍历 右子树数组
    const preorderRightArr = preorder.slice(i);

    root.left = buildTree(preorderLeftArr, inorderLeftArr);
    root.right = buildTree(preorderRightArr, inorderRightArr);
    return root;
};

buildTree = function (preorder, inorder) {
    if (!preorder.length) return null;
    // 获取根节点
    const rVal = preorder[0];
    // 获取根节点对应的中序遍历位置
    const index = inorder.indexOf(rVal);
    // 创建根节点
    const root = new TreeNode(rVal);
    // 根据根节点区分左右子树（不包含根节点）
    const leftArr = inorder.slice(0, index);
    const rightArr = inorder.slice(index + 1);
    const leftPreArr = preorder.slice(1, index + 1);
    const rightPreArr = preorder.slice(index + 1);
    root.left = buildTree(leftPreArr, leftArr);
    root.right = buildTree(rightPreArr, rightArr);
    return root
}