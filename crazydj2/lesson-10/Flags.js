function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let arrPeak = [];

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      arrPeak.push(i);
    }
  }

  function getMaxPeak(startK, endK) {
    if (startK > endK) {
      return null;
    }

    let k = Math.floor((startK + endK) / 2);
    let tempK;
    let result = null;

    let peakNum = 1;
    let lastPeakIndex = 0;
    let peakIndex = 1;

    while (peakIndex < arrPeak.length && peakNum < k) {
      if (arrPeak[peakIndex] - arrPeak[lastPeakIndex] >= k) {
        peakNum++;
        lastPeakIndex = peakIndex;
      }

      peakIndex++;
    }

    if (k === peakNum) {
      result = k;

      if (startK !== endK) {
        tempK = getMaxPeak(k + 1, endK);
        if (tempK !== null) {
          result = tempK;
        }
      }
    } else {
      if (startK !== endK) {
        tempK = getMaxPeak(startK, k - 1);
        if (tempK !== null) {
          result = tempK;
        }
      }
    }

    return result;
  }

  return getMaxPeak(1, arrPeak.length) || 0;
}
