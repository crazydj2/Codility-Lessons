// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let str = N.toString(2);

  let currentGab = 0;
  let longestGab = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      if (currentGab > longestGab) {
        longestGab = currentGab;
      }

      currentGab = 0;
    } else {
      currentGab++;
    }
  }

  return longestGab;
}
