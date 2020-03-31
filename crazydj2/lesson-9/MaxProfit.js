// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let p = 0;
  let q = 1;
  let max = 0;

  while (p < A.length && q < A.length) {
    let temp = A[q] - A[p];

    if (temp < 0) {
      p++;
      q = p + 1;
      continue;
    }

    if (temp > max) {
      max = temp;
    }

    q++;
  }

  return max;
}
