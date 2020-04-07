function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let a = 1;
  let b = N;
  let perimeter = 2 * (a + b);

  let min = perimeter;

  while (a <= b) {
    b = N / a;

    if (N % a === 0) {
      perimeter = 2 * (a + b);

      if (min > perimeter) {
        min = perimeter;
      }
    }

    a++;
  }

  return min;
}
