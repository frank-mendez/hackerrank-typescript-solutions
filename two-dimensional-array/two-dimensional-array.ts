function getElements(arr: number[], queries: number[][]): number[] {
    const result = []
    // the rows based on the length of the queries
    for (let i = 0; i < queries.length; i++) {
        // the columns based on the length of the queries
        for (let j = 0; j < queries[i].length; j++) {
            // the queries are the coordinates of the 2D array
            // so we can use the queries to get the elements from the 2D array
            // and push it to the result array
            result.push(arr[queries[i][0] + queries[i][1]])
        }
    }
    return result
}
