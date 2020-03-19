// 이건 이전에 100% 풀었었던 건데....
// 다시 풀려니까 잘 안되서 결국 검색함... (https://medium.com/@molchevsky/best-solutions-for-codility-lessons-lesson-5-prefix-sums-68b716f9d825)
// 세상에는 참 천재들이 많은 것 같음 ㅋㅋ

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)

  let result = [];
  let count = { A: 0, C: 0, G: 0, T: 0 };
  let arrCount = [];

  for (let i = 0; i < S.length; i++) {
    count[S[i]]++;
    arrCount.push({ ...count });
  }

  for (let i = 0; i < P.length; i++) {
    let pCount = { A: 0, C: 0, G: 0, T: 0 };
    if (P[i] > 0) {
      pCount = arrCount[P[i] - 1];
    }
    let qCount = arrCount[Q[i]];

    if (qCount.A - pCount.A > 0) {
      result.push(1);
    } else if (qCount.C - pCount.C > 0) {
      result.push(2);
    } else if (qCount.G - pCount.G > 0) {
      result.push(3);
    } else {
      result.push(4);
    }
  }

  return result;
}
