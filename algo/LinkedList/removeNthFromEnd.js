const { Node: ListNode } = require('./index.js');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let preHead = new ListNode(0);
    preHead.next = head
    let slow = fast = preHead;
    while (n !== 0) {
        fast = fast.next;
        n--;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return preHead.next;
};

module.exports = {
    removeNthFromEnd
}