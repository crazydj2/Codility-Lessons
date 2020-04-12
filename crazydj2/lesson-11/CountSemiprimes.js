function solution(N, P, Q) {
  // 1. prime 찾기
  // 2. semi prime 찾아서 count

  let arrPrime = [false, false];
  for (let i = 0; i < N + 1; i++) {
    if (arrPrime[i] === false) {
      continue;
    }

    arrPrime[i] = true;

    let j = i + i;
    while (j < N + 1) {
      arrPrime[j] = false;
      j += i;
    }
  }

  let arrSemiCount = new Array(N + 1).fill(0);
  let currentTotal = 0;

  for (let i = 4; i < N + 1; i++) {
    if (arrPrime[i]) {
      arrSemiCount[i] = currentTotal;
      continue;
    }

    let bSemi = true;

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        if (!arrPrime[j] || !arrPrime[i / j]) {
          bSemi = false;
          break;
        }
      }
    }

    if (bSemi) {
      currentTotal++;
    }

    arrSemiCount[i] = currentTotal;
  }

  let result = [];
  for (let i = 0; i < P.length; i++) {
    result.push(arrSemiCount[Q[i]] - arrSemiCount[P[i] - 1]);
  }

  return result;
}
