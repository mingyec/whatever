const { Node, LinkedList } = require('./index.js');
const { hasCycle } = require('./hasCycle')

// [11, 2, 1, 3, 4]

const linkedList = new LinkedList();
linkedList.append(1)
linkedList.append(2)

const lastNode = linkedList.findByValue(2);
const secondNode = linkedList.findByValue(1)
lastNode.next = secondNode;

console.info(hasCycle(linkedList.head.next))