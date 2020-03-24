// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  let arr = [];
  for (let i = 0; i < A.length; i++) {
    arr.push({ size: A[i], direction: B[i] });
  }

  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
      continue;
    }

    if (stack[stack.length - 1].direction === 1 && arr[i].direction === 0) {
      if (stack[stack.length - 1].size < arr[i].size) {
        stack.pop();
        i--;
        continue;
      }
    } else {
      stack.push(arr[i]);
    }
  }

  return stack.length;
}
