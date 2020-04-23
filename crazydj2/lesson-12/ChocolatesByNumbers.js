function solution(N, M) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;

  let arr = [];

  let x = 0;

  if (N > M) {
    M = M % N;
  }

  while (!arr[x]) {
    arr[x] = true;

    let temp = Math.ceil((N - x) / M);
    count += temp;

    x = (x + M * temp) % N;
  }

  return count;
}
