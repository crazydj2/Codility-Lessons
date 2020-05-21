function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  A = A.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      let start = j + 1;
      let end = A.length - 1;

      while (start < end) {
        let point = Math.floor((end + start) / 2);
        if (A[i] + A[j] <= A[point]) {
          end = point - 1;
        } else {
          start = point + 1;
        }
      }

      if (A[i] + A[j] > A[start - 1]) {
        count += start - 1 - j;

        if (A[i] + A[j] > A[start]) {
          count++;
        }
      }
    }
  }

  return count;
}
