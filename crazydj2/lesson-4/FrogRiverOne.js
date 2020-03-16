// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let time = 0;
  let count = 0;
  let arr = [];

  for (let i = 0; i < A.length; i++) {
    if (!arr[A[i] - 1]) {
      arr[A[i] - 1] = true;
      count++;
    }

    time++;

    if (count === X) {
      break;
    }
  }

  if (count !== X) {
    time = 0;
  }

  return time - 1;
}
