/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const row = Array(i + 1).fill(1);
        const prev = triangle[i - 1];
        for (let j = 1; j < i; j++) {
            row[j] = prev[j - 1] + prev[j];
        }
        triangle.push(row);
    }

    return triangle;
};