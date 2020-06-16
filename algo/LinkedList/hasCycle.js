const { Node: ListNode } = require('./index.js');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 哈希表思路
 * @param {ListNode} head
 * @return {boolean}
 */
const h = function(head) {
    const obj = new Map();
    let node = head;
    while (node) {
        // 哈希中存在值，则证明该节点已经遍历过
        if (obj.has(node)) {
            return true;
        }
        obj.set(node, 1);
        node = node.next;
    }
    return false
};

/**
 * 快慢指针思路
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    if (!head) {
        return false
    }
    let slow = head;
    let fast = head.next && head.next.next;
    while (fast && fast.next) {
        if (fast === slow) {
            return true
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false
}

module.exports = {
    hasCycle
}