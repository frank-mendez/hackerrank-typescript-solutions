// arr = [5, 1, 2, 3 ,4, 5, 6, 7, 8, 9, 10]
// queries = [[1,1], [1,2],[2,1],[2,2]]
// result [1, 2, 6, 7]

function breakingRecords(scores: number[]): number[] {
    let maxScore = scores[0];
    let minScore = scores[0];
    let maxBreaks = 0;
    let minBreaks = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxBreaks++;
        } else if (scores[i] < minScore) {
            minScore = scores[i];
            minBreaks++;
        }
    }

    return [maxBreaks, minBreaks];
}

console.log('breakingRecords', breakingRecords([10, 5 ,20, 20, 4, 5, 2, 25, 1]))