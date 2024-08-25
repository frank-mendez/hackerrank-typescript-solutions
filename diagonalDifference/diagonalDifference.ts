function diagonalDifference(arr: number[][]) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][arr.length - i - 1];
  }

  return Math.abs(leftDiagonal - rightDiagonal);
}

console.log('diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]):', diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])); // 15