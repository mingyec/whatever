/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    const next = head.next;
    head.next = swapPairs(next.next);
    // 交换头节点
    next.next = head;
    return next;
};