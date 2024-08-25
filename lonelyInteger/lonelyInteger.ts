function lonelyInteger(arr: number[]): number {
  return arr.reduce((acc, cur) => acc ^ cur, 0);
}

console.log('lonelyInteger([1, 2, 3, 4, 3, 2, 1]):', lonelyInteger([1, 2, 3, 4, 3, 2, 1])); // 4

