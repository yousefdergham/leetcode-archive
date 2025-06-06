/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    s.toLowerCase();
    let sum = 0 ;
    for(let i = 0; i<s.length;i++ ){
       if(i<s.length-1){
      sum += Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0))
       }
    }
    return sum
};