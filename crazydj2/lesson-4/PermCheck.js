// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  A = A.sort((a1, a2) => a1 - a2);

  let count = 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== count) {
      return 0;
    } else {
      count++;
    }
  }

  return 1;
}
