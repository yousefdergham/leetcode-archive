/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    const freqMap = new Map();
    for (const c of word) {
        freqMap.set(c, (freqMap.get(c) || 0) + 1);
    }
    
    const frequencies = Array.from(freqMap.values()).sort((a, b) => a - b);
    let minDeletions = Infinity;
    const n = frequencies.length;
    
    for (let i = 0; i < n; i++) {
        const base = frequencies[i];
        let totalDeletions = 0;
        
        for (let j = 0; j < i; j++) {
            totalDeletions += frequencies[j];
        }
        
        for (let j = i; j < n; j++) {
            if (frequencies[j] > base + k) {
                totalDeletions += frequencies[j] - (base + k);
            }
        }
        
        if (totalDeletions < minDeletions) {
            minDeletions = totalDeletions;
        }
    }
    
    return minDeletions;
};