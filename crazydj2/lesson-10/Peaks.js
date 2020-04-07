function solution(A) {
  let arrPeak = [];

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      arrPeak.push(i);
    }
  }

  let maxDivide = 0;
  let divide = 1;
  for (let i = 2; i < A.length; i++) {
    if (A.length % i === 0) {
      divide = A.length / i;
      break;
    }
  }
  let length = A.length / divide;

  while (divide > 0) {
    if (A.length % divide !== 0) {
      divide--;
      continue;
    }

    length = A.length / divide;

    let existPeak = true;
    let arrTemp = arrPeak.slice();

    for (let i = 0; i < divide; i++) {
      let start = i * length;
      let end = start + length;

      while (arrTemp.length > 0 && arrTemp[0] < start) {
        arrTemp.shift();
      }

      if (arrTemp.length === 0) {
        existPeak = false;
        break;
      }

      if (arrTemp[0] >= end) {
        existPeak = false;
        break;
      }
    }

    if (existPeak) {
      maxDivide = divide;
      break;
    }

    divide--;
  }

  return maxDivide;
}
