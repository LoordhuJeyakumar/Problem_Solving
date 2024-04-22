class Stack {
  constructor() {
    this.data = [];
  }

  push(data) {
    return this.data.push(data);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
  isEmpty() {
    return this.data.length === 0;
  }
  size() {
    return this.data.length;
  }
  print() {
    let res = "";
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      for (let i = 0; i < this.data.length; i++) {
        res += this.data[i] + " ";
      }

      console.log(res);
    }
  }
}

module.exports = Stack;
