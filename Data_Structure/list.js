const LinkedList = require("./linkedList");

let list = new LinkedList();
list.insertAtHead(5);
list.insertAtTail(3);
list.insertAtTail(2);
list.print();

list.reverse();
list.print();
