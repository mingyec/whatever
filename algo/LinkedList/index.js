/**
 * 实现链表
 * 1. 单链表
 * 2. 双链表
 * 3. 循环链表
 */


/**
 * 节点实现
 */
class Node {
    /**
     * 节点值
     * @param {*} val 
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * 单链表
 */
class LinkedList {
    constructor() {
        this.head = new Node(null);
    }

    /**
     * 根据值查找节点
     * @param {*} val 
     */
    findByValue(val) {
        let currentNode = this.head.next;
        while (currentNode) {
            if (currentNode.val === val) {
                return currentNode
            }
            currentNode = currentNode.next;
        }
        return -1
    }

    /**
     * 根据下标查找节点
     * @param {number} index
     */
    findByIndex(index) {
        let pos = 0;
        let currentNode = this.head.next;
        while (currentNode) {
            if (pos === index) {
                return currentNode;
            }
            pos++
            currentNode = currentNode.next;
        }
        return -1;

    }

    /**
     * 向链表尾添加节点
     * @param {*} val 
     */
    append(val) {
        // 找出尾节点
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(val);
    }

    /**
     * 向指定元素后插入节点
     * @param {*} currentVal 待插入值
     * @param {*} lastVal 指定插入值
     */
    insert(currentVal, lastVal) {
        let lastNode = this.findByValue(lastVal);
        // 找不到指定节点
        if (lastNode === -1) {
            console.info('无法找到 ' + lastVal + ' 节点')
            return
        }
        const currentNode = new Node(currentVal);
        currentNode.next = lastNode.next;
        lastNode.next = currentNode;
    }

    /**
     * 查找上一个节点
     * @param {*} val 
     */
    findPrev(val) {
        const node = this.findByValue(val);
        // 处理当前节点不存在的情况
        if (node === -1) {
            console.info('当前 ' + val + ' 节点不存在')
            return -1;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            // 下个节点的值等于查找节点值
            if (currentNode.next.val === val) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return -1
    }

    /**
     * 移除指定节点
     * @param {*} val 节点值 
     */
    remove(val) {
        const lastNode = this.findPrev(val)
        // 找不到指定节点
        if (lastNode === -1) {
            return
        }
        lastNode.next = lastNode.next.next || null;
    }

    /**
     * 显示所有节点
     */
    display() {
        // 排除头节点
        let currentNode = this.head.next;
        if (!currentNode) {
            return;
        }
        while (currentNode) {
            console.info(currentNode.val)
            currentNode = currentNode.next;
        }
    }
}

module.exports = {
    Node, LinkedList
}