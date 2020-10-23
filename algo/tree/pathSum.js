/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 路径总和3
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    if (!root) return 0;
    const map = new Map();
    map.set(0, 1);
    return fn(root, map, sum, 0);
};

const fn = (root, map, sum, currSum) => {
    if (!root) return 0;
    let res = 0;
    currSum += root.val;
    res += map.get(currSum - sum) || 0;
    map.set(currSum, (map.get(currSum) || 0) + 1);
    res += fn(root.left, map, sum, currSum);
    res += fn(root.right, map, sum, currSum);
    map.set(currSum, map.get(currSum) - 1);
    return res;
}