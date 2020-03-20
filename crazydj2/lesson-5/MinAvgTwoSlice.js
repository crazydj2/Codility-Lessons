// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let current = { start: 0, end: 1, sum: A[0] + A[1], avg: (A[0] + A[1]) / 2 };
  let min = { ...current };

  while (current.start < A.length) {
    let nextEnd = current.end + 1;

    if (nextEnd < A.length && A[nextEnd] < current.avg) {
      current.end++;
      current.sum += A[current.end];
      current.avg = current.sum / (current.end - current.start + 1);
    } else {
      if (current.end - current.start > 1) {
        current.sum -= A[current.start];
        current.start++;
        current.avg = current.sum / (current.end - current.start + 1);
      } else {
        let newStart = current.end;
        current = { start: newStart, end: nextEnd };
        if (nextEnd < A.length) {
          current.sum = A[current.start] + A[current.end];
          current.avg = current.sum / 2;
        }
      }
    }

    if (min.avg > current.avg) {
      min = { ...current };
    }
  }

  return min.start;
}
