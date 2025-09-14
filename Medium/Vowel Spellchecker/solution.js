/*
Vowel Spellchecker
Difficulty: Medium
Language: JavaScript
Runtime: 29 ms
Memory: 68.2 MB
Submitted: 2025-09-14T12:45:30.245Z
Link: https://leetcode.com/problems/vowel-spellchecker/submissions/1770505215/?envType=daily-question&envId=2025-09-14
*/

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const exact = new Set(wordlist);
    const lowerMap = new Map();
    const vowelMap = new Map();

    const isVowel = (c) => "aeiou".includes(c);
    const maskVowels = (s) => {
        s = s.toLowerCase();
        let out = '';
        for (let ch of s) out += isVowel(ch) ? 'a' : ch;
        return out;
    };

    for (let w of wordlist) {
        const wl = w.toLowerCase();
        if (!lowerMap.has(wl)) lowerMap.set(wl, w);
        const m = maskVowels(wl);
        if (!vowelMap.has(m)) vowelMap.set(m, w);
    }

    const ans = [];
    for (let q of queries) {
        if (exact.has(q)) {
            ans.push(q);
            continue;
        }
        const ql = q.toLowerCase();
        if (lowerMap.has(ql)) {
            ans.push(lowerMap.get(ql));
            continue;
        }
        const qm = maskVowels(ql);
        ans.push(vowelMap.get(qm) || "");
    }
    return ans;
};
