const { Node, LinkedList } = require('./index.js');
const { hasCycle } = require('./hasCycle')

// [11, 2, 1, 3, 4]

const linkedList = new LinkedList();
linkedList.append(1)

console.info(hasCycle(linkedList.head.next))