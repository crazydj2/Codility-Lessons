function solution(M, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;
  let start = 0;

  let preObj = null;
  let preEnd = 0;

  while (start < A.length) {
    let obj = { count: 0 };
    if (preObj) {
      obj = preObj;
    }

    let index = start;
    if (start < preEnd) {
      index = preEnd;
    }

    for (let i = index; i < A.length; i++) {
      if (!obj[A[i] + ""]) {
        obj[A[i] + ""] = true;
        obj.count++;
      } else {
        break;
      }
    }

    count += obj.count;

    if (count >= 1000000000) {
      return 1000000000;
    }

    preEnd = start + obj.count;
    preObj = obj;
    preObj[A[start] + ""] = false;
    preObj.count--;

    start++;
  }

  return count;
}
