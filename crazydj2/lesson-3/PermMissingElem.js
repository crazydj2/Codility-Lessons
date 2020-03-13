// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let result = 0;
  let arr = A.sort((a1, a2) => a1 - a2);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      result = i + 1;
      break;
    }
  }

  if (!result) {
    result = A.length + 1;
  }

  return result;
}
