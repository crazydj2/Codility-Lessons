// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(" || S[i] === "[" || S[i] === "{") {
      stack.push(S[i]);
    } else {
      if (
        (S[i] === ")" && stack[stack.length - 1] === "(") ||
        (S[i] === "]" && stack[stack.length - 1] === "[") ||
        (S[i] === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.pop();
      } else {
        return 0;
      }
    }
  }

  return stack.length > 0 ? 0 : 1;
}
