const { Node: ListNode } = require('./index.js');
/**
 * 链表的中间节点
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 快慢指针
 * @param {ListNode} head
 * @return {ListNode} 
 */
var middleNode = function(head) {
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow;
};

/**
 * 数组法
 * @param {ListNode} head
 * @return {ListNode} 
 */
const mNode1 = function(head) {
    const arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    return arr[Math.floor(arr.length / 2)] || head
}

module.exports = {
    middleNode,
    mNode1
}