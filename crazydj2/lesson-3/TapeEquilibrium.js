// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let left = 0;
  let right = A.reduce((acc, cur) => acc + cur);
  let min = null;

  for (let p = 1; p < A.length; p++) {
    left += A[p - 1];
    right -= A[p - 1];

    let temp = left - right;
    temp = temp < 0 ? -1 * temp : temp;

    if (min === null || temp < min) {
      min = temp;
    }
  }

  return min;
}
