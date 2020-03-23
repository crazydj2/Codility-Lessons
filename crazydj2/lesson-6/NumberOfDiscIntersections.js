// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;

  let arr = A.map((value, index) => ({
    start: index - value,
    end: index + value
  })).sort((a, b) => (a.start !== b.start ? a.start - b.start : a.end - b.end));

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].end >= arr[j].start) {
        count++;

        if (count > 10000000) {
          return -1;
        }
      } else {
        break;
      }
    }
  }

  return count;
}
