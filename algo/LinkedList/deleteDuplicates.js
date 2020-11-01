/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * 删除排序链表中的重复元素
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return null;
    let slow = head;
    let fast = head;
    while (fast !== null) {
        // 快慢指针不等时
        if (slow.val !== fast.val) {
            slow.next = fast;
            slow = fast;
        }
        // 快指针前进一步
        fast = fast.next;
    }
    // 断尾，删除多余重复元素
    slow.next = null;
    return head;
};