// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let small = 0;

  A = A.sort((a1, a2) => a1 - a2).filter(a => a > 0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] - 1 === small) {
      small++;
    } else if (A[i] === small) {
      continue;
    } else {
      break;
    }
  }

  small++;

  return small;
}
