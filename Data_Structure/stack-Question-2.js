const Stack = require("./stack");

let stack = new Stack();

function isBalanced(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.isEmpty()) {
        return false;
      }

      let topElement = stack.pop();
      if (
        (char === ")" && topElement !== "(") ||
        (char === "]" && topElement !== "[") ||
        (char === "}" && topElement !== "{")
      ) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}
console.log(isBalanced("{[]}"));
console.log(isBalanced("()"));
console.log(isBalanced("()[]{}"));

console.log(isBalanced("(]"));

console.log(isBalanced("]"));
console.log(isBalanced("([{})"));
