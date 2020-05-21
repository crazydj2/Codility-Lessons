function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  A = A.sort((a, b) => a - b);

  if (A[0] >= 0) {
    return A[0] + A[0];
  } else if (A[A.length - 1] < 0) {
    return Math.abs(A[A.length - 1] + A[A.length - 1]);
  }

  let min = Math.abs(A[0] + A[A.length - 1]);
  let start = 0;
  let end = A.length - 1;

  while (start < end) {
    if (A[start] > 0 || A[end] < 0) {
      break;
    }

    let tempMin = Math.abs(A[start] + A[end]);

    if (tempMin <= min) {
      min = tempMin;
    }

    if (Math.abs(A[start]) > Math.abs(A[end])) {
      start++;
    } else {
      end--;
    }
  }

  return min;
}
