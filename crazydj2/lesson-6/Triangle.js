// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let arr = A.sort((a, b) => b - a);

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i + 1] + arr[i + 2] > arr[i]) {
      return 1;
    }
  }

  return 0;
}
