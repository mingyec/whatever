const { Node, LinkedList } = require('./index.js');

// [11, 2, 1, 3, 4]

const linkedList = new LinkedList();
linkedList.append(11)
linkedList.append(2)
linkedList.append(1)
linkedList.append(3)
linkedList.append(4)

console.info(linkedList.findByIndex(10))