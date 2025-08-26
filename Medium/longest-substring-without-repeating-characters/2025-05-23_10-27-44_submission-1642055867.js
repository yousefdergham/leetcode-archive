/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let rightSet = new Set
    let rightCount = 0
    let leftSet = new Set
    let breakPiont = s.length / 2
    for (a in s) {
      if(breakPiont==1 &s[0]!=s[1]){
        return 2;
      }
        if (rightCount >= breakPiont) {
            leftSet.add(s[a])
        }else{
        rightSet.add(s[a])
        }
        rightCount++
    }
   if(rightSet.size>leftSet.size){
    return rightSet.size
   }else{
    return leftSet.size
   }
};