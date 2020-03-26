// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let obj = {};

  for (let i = 0; i < A.length; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = [];
    }

    obj[A[i]].push(i);
  }

  let result = -1;
  for (let key in obj) {
    if (obj[key].length > A.length / 2) {
      result = obj[key][0];
      break;
    }
  }

  return result;
}
