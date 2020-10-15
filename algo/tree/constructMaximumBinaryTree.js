/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 最大二叉树
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (!nums.length) return null;
    if (nums.length === 1) return new TreeNode(nums[0])
    // 获取当前最大值
    const max = Math.max(...nums);
    // 获取最大值下标
    const index = nums.findIndex(val => val === max);
    const root = new TreeNode(max);
    root.left = constructMaximumBinaryTree(nums.slice(0, index))
    root.right = constructMaximumBinaryTree(nums.slice(index + 1))
    return root;
};

constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);