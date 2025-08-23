/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const gcd = (len1, len2) => {
        const minVal = Math.min(len1, len2);
        for (let i = minVal; i > 0; i--) {
            if (len1 % i === 0 && len2 % i === 0) {
                return i;
            }
        }
        return 1;
    };

    return str1.slice(0, gcd(str1.length, str2.length));    
};