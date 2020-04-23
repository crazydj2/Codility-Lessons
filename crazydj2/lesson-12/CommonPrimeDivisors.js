function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)

  let maxPrime = Math.sqrt(2147483647);
  let arrPrime = [];
  let arrTemp = [false, false];
  for (let i = 2; i <= maxPrime; i++) {
    if (arrTemp[i] !== false) {
      arrTemp[i] = true;
      arrPrime.push(i);

      for (let j = i + i; j <= maxPrime; j += i) {
        arrTemp[j] = false;
      }
    }
  }

  function isSameFrime(a, b) {
    if (b === a) {
      return true;
    }

    if (a > b) {
      [a, b] = [b, a];
    }

    for (let i = 0; i < arrPrime.length; i++) {
      if (arrPrime[i] > b) {
        break;
      }

      let calA = a % arrPrime[i];
      let calB = b % arrPrime[i];

      if ((calA === 0 && calB !== 0) || (calA !== 0 && calB === 0)) {
        return false;
      }

      if (calA === 0 && calB === 0) {
        while (a % arrPrime[i] === 0) {
          a = a / arrPrime[i];
        }

        while (b % arrPrime[i] === 0) {
          b = b / arrPrime[i];
        }
      }
    }

    return a === b;
  }

  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (isSameFrime(A[i], B[i])) {
      count++;
    }
  }

  return count;
}
