const LinkedList = require("./linkedList");

let list = new LinkedList();
list.insertAtTail(3);
list.insertAtTail(2);
list.insertAtTail(7);
list.insertAtTail(10);
list.print();


list.print();
list.insertAtTail(1);

// This function determines if a linked list has a cycle.
function isHaveCycle(list) {
      // If the list is empty, there can't be a cycle, so return false.
  if (!list) return false;

    // Create two pointers, `fast` and `slow`.
  let fast = list;
  let slow = list;

    // Iterate through the linked list using a while loop.
  while (fast) {

        // If `fast` reaches the end of the list (i.e., `fast.next` is null),
    if (!fast.next) {
            // there can't be a cycle, so return false.
      return false;
    } else {

              // Move `fast` two nodes ahead (`fast.next.next`).
      fast = fast.next.next;

          // Move `slow` one node ahead (`slow.next`).
      slow = slow.next;
    }

        // If `fast` and `slow` ever meet, it means there's a cycle, so return true.
    if (fast === slow) return true;
  }

    // If the loop completes without finding a cycle, return false.
  return false;
}

console.log(list.isHaveCycle());