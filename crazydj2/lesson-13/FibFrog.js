// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let map = [0, 1];

  function fibo(n) {
    let sum = map[n];
    if (!sum && n > 1) {
      sum = fibo(n - 1) + fibo(n - 2);
      map[n] = sum;
    }

    return sum;
  }

  let fiboIndex = 2;
  while (map[map.length - 1] < A.length + 1) {
    fibo(fiboIndex);
    fiboIndex++;
  }

  let minMap = [];

  function getMin(current) {
    let min = 0;

    for (let i = map.length - 1; i > 0; i--) {
      if (current + map[i] === A.length) {
        minMap[current] = 1;
        return 1;
      }

      if (A[current + map[i]] === 1) {
        let temp = minMap[current + map[i]];
        if (!temp) {
          temp = getMin(current + map[i]);
        }

        if (temp > 0 && (min === 0 || min > temp + 1)) {
          min = temp + 1;
          minMap[current] = min;
        }
      }
    }

    return min;
  }

  return getMin(-1, 0) || -1;
}
