const LinkedList = require("./linkedList");

let list = new LinkedList();
list.insertAtTail(3);
list.insertAtTail(2);
list.insertAtTail(7);
list.insertAtTail(10);
list.print();

list.createCycleAtIndex(2);
list.print();
list.insertAtTail(1);

/* function isHaveCycle(list) {
  if (!list) return false;
  let fast = list;
  let slow = list;
  while (fast) {
    if (!fast.next) {
      return false;
    } else {
      fast = fast.next.next;
      slow = slow.next;
    }

    if (fast === slow) return true;
  }

  return false;
} */

console.log(list.isHaveCycle());