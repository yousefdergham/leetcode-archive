/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    const validChars = /^[A-Za-z0-9]+$/;
    const hasVowel = /[AEIOUaeiou]/;
    const hasConsonant = /[B-DF-HJ-NP-TV-Zb-df-hj-np-tv-z]/;

    return (
        word.length >= 3 &&
        validChars.test(word) &&
        hasVowel.test(word) &&
        hasConsonant.test(word)
    );
};