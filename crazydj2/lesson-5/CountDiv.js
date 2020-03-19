// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;

  if (A === B) {
    count = A % K === 0 ? 1 : 0;
  } else {
    let countA = Math.floor(A / K) + 1;
    let countB = Math.floor(B / K) + 1;

    count = countB - countA;
    if (A % K === 0) {
      count++;
    }
  }

  return count;
}
