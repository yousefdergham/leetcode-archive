/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function (k, operations) {
    let lengths = [1];
    for (const op of operations) {
        if (op === 0) {
            lengths.push(lengths.at(-1) * 2);
        } else {
            lengths.push(lengths.at(-1) * 2);
        }
    }

    let currentIndex = k - 1;
    let increments = 0;

    for (let i = operations.length - 1; i >= 0; i--) {
        let prevLen = lengths[i];
        if (operations[i] === 0) {
            if (currentIndex >= prevLen) {
                currentIndex -= prevLen;
            }
        } else {
            if (currentIndex >= prevLen) {
                currentIndex -= prevLen;
                increments += 1;
            }
        }
    }
    let code = 97 + increments;
    code = (code - 97) % 26 + 97;
    return String.fromCharCode(code);
};