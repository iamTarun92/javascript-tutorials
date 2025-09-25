function fibonacciUpTo(maxValue) {
  let sequence = [0, 1];
  // Keep generating until next number exceeds maxValue
  while (true) {
    let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (next > maxValue) break;
    sequence.push(next);
  }

  return sequence;
}

console.log(fibonacciUpTo(100)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
