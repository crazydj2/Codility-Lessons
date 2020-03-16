// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let arr = new Array(N).fill(0);
  let base = 0;
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > N) {
      base = max;
    } else {
      if (arr[A[i] - 1] < base) {
        arr[A[i] - 1] = base + 1;
      } else {
        arr[A[i] - 1]++;
      }

      if (max < arr[A[i] - 1]) {
        max = arr[A[i] - 1];
      }
    }
  }

  arr = arr.map(a => (a < base ? base : a));

  return arr;
}
