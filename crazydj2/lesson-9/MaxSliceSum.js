// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let p = 0,
    q = 0;
  let currentSum = 0;
  let max = A[p];

  while (p < A.length && q < A.length) {
    currentSum += A[q];

    if (currentSum > max) {
      max = currentSum;
    }

    if (currentSum < 0) {
      p++;
      q = p;
      currentSum = 0;
      continue;
    }

    q++;
  }

  return max;
}
