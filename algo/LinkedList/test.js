const { Node, LinkedList } = require('./index.js');
const { middleNode } = require('./middleNode')

// [11, 2, 1, 3, 4]

const l1 = new LinkedList();
l1.append(1)
l1.append(2)
l1.append(4)
l1.append(5)

const l2 = new LinkedList();
l2.append(1)
l2.append(3)
l2.append(4)

const a = middleNode(l1.head.next);
console.info(a)