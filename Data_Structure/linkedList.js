// Define a Node class
class Node {
  // Constructor function to initialize a new node
  constructor(data) {
    // Creates a new node with the given data.
    this.data = data;
    // Initializes the `next` pointer to `null`, indicating the node doesn't point to another node initially.
    this.next = null;
  }
}

// Define a LinkedList class
class LinkedList {
  // Constructor function to initialize a new linked list
  constructor(data) {
    // Initializes an empty linked list or a linked list with the provided data as the head.
    this.head = data ? new Node(data) : null;
    this.size = data ? 1 : 0;
  }

  // Function to insert a node at the end of the list
  insertAtTail(data) {
    // Create a new node
    let newNode = new Node(data);

    if (this.head == null) {
      // If the list is empty, set the new node as the head.
      this.head = newNode;
      // Increase the size of the list
      this.size++;
    } 

    if(this.isHaveCycle()){
      console.log("Cycle detected, cannot insert the list");
      return;
    }
    else {
      // Traverse the list to find the current tail (last node).
      let tail = this.head;
      while (tail.next != null) {
        tail = tail.next;
      }
      // Set the `next` pointer of the current tail to the new node, making it the new tail.
      tail.next = newNode;
      // Increase the size of the list
      this.size++;
    }
  }

  // Function to insert a node at the beginning of the list
  insertAtHead(data) {
    // Create a new node
    let newNode = new Node(data);

    if (this.head == null) {
      // If the list is empty, set the new node as the head.
      this.head = newNode;
      // Increase the size of the list
      this.size++;
    } else {
      // Make the new node the head and point it to the previous head.
      let currentData = this.head;
      this.head = newNode;
      newNode.next = currentData;
      // Increase the size of the list
      this.size++;
    }
  }

  // Function to delete a node from the beginning of the list
  deleteAtHead() {
    // If the list is empty, print an error message
    if (this.head == null) {
      console.error("List is empty");
      return this;
    } else {
      // Update the head to point to the second node, effectively removing the first node.
      let afterDeleteData = this.head.next;
      this.head = afterDeleteData;
      // Decrease the size of the list
      this.size--;
      return afterDeleteData;
    }
  }

  // Function to delete a node from the end of the list
  deleteAtTail() {
    // If the list is empty, print an error message
    if (this.head == null) {
      console.error("List is empty");
      return this;
    }

    if (this.head.next == null) {
      // If there's only one node (head), set the head to null (empty list).
      this.head = null;
      // Decrease the size of the list
      this.size--;
    } else {
      //If the list has more than one node, Traverse to the second-last node.
      let tail = this.head;
      while (tail.next.next != null) {
        tail = tail.next;
      }
      // Set the `next` pointer of the second-last node to `null`, effectively removing the last node.
      tail.next = null;
      // Decrease the size of the list
      this.size--;
    }
  }

  insertDataUsingIndex(data, index) {
    if (index == 0) {
      this.insertAtHead(data);
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {}
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev;
  }

  createCycleAtIndex(index) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let tail = this.head;

    while (tail.next != null) {
      tail = tail.next;
    }

    let current = this.head;
    let currentIndex = 0;

    while (current != null && currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    if (current == null) {
      console.error("Index not found");
      return;
    }

    tail.next = current;
  }

  isHaveCycle() {
    if (!this.head) return false;
    let fast = this.head;
    let slow = this.head;
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
  }

  // Function to get the length of the list
  length() {
    let nodes = 0;
    // If the list is empty, return -1
    if (this.head == null) {
      return -1;
    } else {
      // If the list is not empty, count the number of nodes
      let tHead = this.head;
      while (tHead != null) {
        tHead = tHead.next;
        nodes++;
      }
      // Return the number of nodes
      return nodes;
    }
  }

  // Function to check if the list is empty
  isEmpty() {
    return this.size == 0; // Return true if size is 0, false otherwise
  }

  // Function to get the size of the list
  getSize() {
    return this.size; // Return the size of the list
  }

  // Function to convert the linked list to an array
  toArray() {
    let array = [];

    // If the list is empty, return an empty array
    if (this.head == null) {
      return array;
    } else {
      // If the list is not empty, add each node's data to the array
      let tHead = this.head;
      while (tHead != null) {
        array.push(tHead.data);
        tHead = tHead.next;
      }

      return array; // Return the array
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    }

    if (this.isHaveCycle()) {
      console.log("Cycle detected, cannot print the list");
      return;
    } else {
      let current = this.head;
      let allDatas = ``;
      while (current) {
        allDatas += current.data + " ";
        current = current.next;
      }
      console.log(allDatas);
    }
  }
}

module.exports = LinkedList;