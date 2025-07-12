/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
const freqMap = new Map();
for (const c of word) {
    freqMap.set(c, (freqMap.get(c) || 0) + 1);
}