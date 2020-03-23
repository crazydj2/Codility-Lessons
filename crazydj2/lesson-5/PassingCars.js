// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;
  let countP = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      countP++;
    } else {
      count += countP;

      if (count > 1000000000) {
        return -1;
      }
    }
  }

  return count;
}
