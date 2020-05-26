// https://ratsgo.github.io/data%20structure&algorithm/2017/11/22/greedy/

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  let arr = [];
  for (let i = 0; i < A.length; i++) {
    arr.push({ start: A[i], end: B[i] });
  }

  if (arr.length === 0) {
    return 0;
  }

  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let last = result[result.length - 1];

    if (arr[i].start > last.end) {
      result.push(arr[i]);
    }
  }

  return result.length;
}
