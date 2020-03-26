// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;
  let stack = [];
  let currentH = 0;

  for (let i = 0; i < H.length; i++) {
    if (currentH === H[i]) {
      continue;
    }

    if (currentH < H[i]) {
      stack.push(H[i] - currentH);
      currentH = H[i];
    } else {
      while (currentH > H[i]) {
        currentH -= stack.pop();
        count++;
      }

      i--;
    }
  }

  return count + stack.length;
}
