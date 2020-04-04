// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;

  let d = 1;

  while (d * d < N) {
    if (N % d === 0) {
      count += 2;
    }

    d++;
  }

  if (d * d === N) {
    count += 1;
  }

  return count;
}
