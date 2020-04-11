// 실제 이 문제의 핵심은 약수를 구하는 알고리즘임;;;;
// 참조 링크
// https://sustainable-dev.tistory.com/31
// https://curt-park.github.io/2018-09-17/algorithm-primality-test/

function solution(A) {
  // 각 A[i] 의 출연 횟수
  let arr = new Array(2 * A.length + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    arr[A[i]]++;
  }

  let result = [];
  for (let i = 0; i < A.length; i++) {
    // A[i] 의 약수를 구한다.
    // 모든 약수들의 출연 횟수를 다 더한다.
    // A 의 개수에서 약수들의 출연 횟수를 빼면 non-divisors 의 개수가 나온다

    let count = 0;
    for (let j = 1; j * j <= A[i]; j++) {
      if (A[i] % j === 0) {
        count += arr[j];

        if (A[i] / j !== j) {
          count += arr[A[i] / j];
        }
      }
    }

    result.push(A.length - count);
  }

  return result;
}
