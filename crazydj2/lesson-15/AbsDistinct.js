function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let obj = {};
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    let item = Math.abs(A[i]);

    if (!obj[item + ""]) {
      obj[item + ""] = true;
      count++;
    }
  }

  return count;
}
