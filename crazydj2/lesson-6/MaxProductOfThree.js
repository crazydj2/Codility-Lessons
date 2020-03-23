// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let arr = A.map((value, index) => ({ value, index })).sort(
    (a, b) => b.value - a.value
  );

  let max = arr[0].value * arr[1].value * arr[2].value;

  let max2 =
    arr[0].value * arr[arr.length - 2].value * arr[arr.length - 1].value;

  if (max < max2) {
    max = max2;
  }

  return max;
}
