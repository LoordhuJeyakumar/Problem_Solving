const LinkedList = require("./linkedList");

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(data) {
    return this.list.insertAtTail(data);
  }

  dequeue(data) {
    return this.list.deleteAtHead(data);
  }
  peek() {
    return this.list.head.data;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}

module.exports = Queue;
