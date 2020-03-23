// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let obj = { length: 0 };

  for (let i = 0; i < A.length; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = true;
      obj.length++;
    }
  }

  return obj.length;
}
