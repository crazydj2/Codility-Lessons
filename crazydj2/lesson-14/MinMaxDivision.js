// http://dal4segno.github.io/algorithm/codility-14-binary-search-algorithm/
// 개감탄

function solution(K, M, A) {
  let lower = Math.max(...A);
  let upper = A.reduce((a, c) => a + c, 0);
  let min = upper;

  function isAvailable(mid) {
    let sum = 0;
    let block = 1;

    for (let i = 0; i < A.length; i++) {
      if (sum + A[i] > mid) {
        sum = A[i];
        block++;
      } else {
        sum += A[i];
      }

      if (block > K) {
        return false;
      }
    }

    return true;
  }

  while (lower <= upper) {
    let mid = Math.ceil((lower + upper) / 2);

    if (isAvailable(mid)) {
      upper = mid - 1;
      min = mid;
    } else {
      lower = mid + 1;
    }
  }

  return min;
}
