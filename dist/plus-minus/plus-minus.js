"use strict";
function plusMinus(arr) {
    const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    // Count positive, negative, and zero elements
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        }
        else if (arr[i] < 0) {
            negativeCount++;
        }
        else {
            zeroCount++;
        }
    }
    // Calculate ratios
    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;
    // Print ratios with 6 decimal places
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}
