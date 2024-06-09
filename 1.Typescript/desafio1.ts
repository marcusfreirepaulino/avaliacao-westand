function findLargestNumber(input: number[]): number {
  let max = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
      max = input[i];
    }
  }

  return max;
}
