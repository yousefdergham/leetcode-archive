/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if(s.length!=t.length){
        return false
    }
    let obj = {};
    let objj = {}
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1
        } else {
            obj[s[i]] += 1
        }
        if (objj[t[i]] === undefined) {
            objj[t[i]] = 1
        } else {
            objj[t[i]] += 1
        }

    }
    let keys1 = Object.keys(obj);
    let keys2 = Object.keys(objj);
    for (let key of keys1) {
        if (objj[key] !== obj[key]) return false;
    }
    return true

};