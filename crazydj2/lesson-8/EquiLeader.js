// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let left = {};
  let leftLeader = null;
  let leftMap = {};

  for (let i = 0; i < A.length; i++) {
    if (!left[A[i]]) {
      left[A[i]] = 0;
    }

    left[A[i]]++;

    if (leftLeader !== null) {
      if (leftLeader === A[i]) {
        if (left[leftLeader] <= (i + 1) / 2) {
          leftLeader = null;
        }
      } else {
        if (left[leftLeader] > left[A[i]]) {
          if (left[leftLeader] <= (i + 1) / 2) {
            leftLeader = null;
          }
        } else {
          leftLeader = null;
        }
      }
    } else {
      if (left[A[i]] > (i + 1) / 2) {
        leftLeader = A[i];
      }
    }

    leftMap[i] = leftLeader;
  }

  let right = {};
  let rightLeader = null;
  let rightMap = {};

  for (let i = A.length - 2; i >= 0; i--) {
    if (!right[A[i + 1]]) {
      right[A[i + 1]] = 0;
    }

    right[A[i + 1]]++;

    if (rightLeader !== null) {
      if (rightLeader === A[i + 1]) {
        if (right[rightLeader] <= (A.length - (i + 1)) / 2) {
          rightLeader = null;
        }
      } else {
        if (right[rightLeader] > right[A[i + 1]]) {
          if (right[rightLeader] <= (A.length - (i + 1)) / 2) {
            rightLeader = null;
          }
        } else {
          rightLeader = null;
        }
      }
    } else {
      if (right[A[i + 1]] > (A.length - (i + 1)) / 2) {
        rightLeader = A[i + 1];
      }
    }

    rightMap[i] = rightLeader;
  }

  let count = 0;

  for (let i = 0; i < A.length - 1; i++) {
    if (leftMap[i] !== null && leftMap[i] === rightMap[i]) {
      count++;
    }
  }

  return count;
}
