// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let rightMap = {};
  let rightEnding = 0;
  let rightMax = 0;

  for (let y = A.length - 2; y > 0; y--) {
    if (y < A.length - 2) {
      rightEnding += A[y + 1];
      if (rightEnding < 0) {
        rightEnding = 0;
      }
      rightMax = rightEnding;
    }
    rightMap[y] = rightMax;
  }

  let leftMap = {};
  let leftEnding = 0;
  let leftMax = 0;

  let max = 0;

  for (let y = 1; y < A.length - 1; y++) {
    if (y > 1) {
      leftEnding += A[y - 1];
      if (leftEnding < 0) {
        leftEnding = 0;
      }
      leftMax = leftEnding;
    }
    leftMap[y] = leftMax;

    let temp = leftMap[y] + rightMap[y];
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}
