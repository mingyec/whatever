const { Node: ListNode } = require('./index.js');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 反转单链表
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    let prev = null,
        node = head;
    while (node) {
        // 缓存下个节点
        let next = node.next;

        // 当前节点next指向上个节点
        node.next = prev;

        // 缓存上个节点
        prev = node;

        node = next;
    }
    return prev
};

/**
 * 精简版
 * @param {ListNode} node 
 */
function r(head) {
    let [prev, node] = [null, head];
    while (node) {
        [node.next, prev, node] = [prev, node, node.next]
    }
    return prev;
}

module.exports = {
    reverseList,
    r
}