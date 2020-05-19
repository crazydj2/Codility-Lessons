// http://dal4segno.github.io/algorithm/codility-14-binary-search-algorithm/
// https://github.com/yaseenshaik/codility-solutions-javascript/blob/master/NailingPlanks.md
// 개감탄

function solution(A, B, C) {
  var begin = 0;
  var end = C.length - 1;
  var res = -1;

  while (begin <= end) {
    var mid = parseInt((begin + end) / 2);
    if (check(A, B, C, mid + 1)) {
      end = mid - 1;
      res = mid + 1;
    } else {
      begin = mid + 1;
    }
  }

  return res;
}

function check(a, b, c, num) {
  var pNails = new Array(2 * c.length + 1).fill(0);

  // 못 위치 찾기
  for (var i = 0; i < num; ++i) {
    ++pNails[c[i]];
  }

  // 이전 값을 + 해 나감
  // 만약 a 위치에 못이 박혀 있고 (pNail[a] 는 1 인 경우), 이후부터는 못이 없을 경우 a + 1 부터는 pNail[a] 와 같은 값을 지니게 됨
  for (i = 1; i < pNails.length; ++i) {
    pNails[i] += pNails[i - 1];
  }

  // 만약 {a ~ b} 범위안에 못이 있다면, pNail[b] 는 무조건 pNail[a] 보다 큼 (두번째 for 문에서 못이 있으면 ++ 가 되기 때문에)
  for (i = 0; i < a.length; ++i) {
    if (pNails[b[i]] <= pNails[a[i] - 1]) return false;
  }

  return true;
}
