function solution(A, B) {
  let map = [0, 1];
  let maxPow = Math.pow(2, 30);

  function getFibo(n) {
    if (!map[n]) {
      for (let i = map.length; i < n + 1; i++) {
        map[i] = map[i - 1] + map[i - 2];
        if (map[i] > maxPow) {
          map[i] = map[i] - maxPow * Math.floor(map[i] / maxPow);
        }
      }
    }

    return map[n];
  }

  let result = [];
  for (let i = 0; i < A.length; i++) {
    let pow = Math.pow(2, B[i]);
    let way = getFibo(A[i] + 1);

    result.push(way % pow);
  }

  return result;
}
