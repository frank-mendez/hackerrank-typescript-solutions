function findMedian(arr: number[]): number {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    const mid = Math.floor(n / 2);
    if (n % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}

console.log('findMedian', findMedian([0, 1, 2, 4, 6, 5, 3])); //1