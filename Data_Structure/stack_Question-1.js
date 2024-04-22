// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

const Stack = require("./stack");

let stack = new Stack();

function reverseStringWords(str) {
  wordsArr = str.split(" ");

  for (const word of wordsArr) {
    stack.push(word);
  }

  let newString = "";
  while (stack.size()) {
    popedWord = stack.pop();
    newString += popedWord + " ";
  }

  return newString.trim();
}

console.log(reverseStringWords("the sky is blue"));
