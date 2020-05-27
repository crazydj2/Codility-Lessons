function solution(K, A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;
  let current = 0;

  for (let i = 0; i < A.length; i++) {
    current += A[i];

    if (current >= K) {
      count++;
      current = 0;
    }
  }

  return count;
}
