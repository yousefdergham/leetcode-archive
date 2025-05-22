/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
       let duplicate = false;
        let numsObj={}
        for(let i = 0; i<nums.length; i++){
          let key = "item" + nums[i]
          if (numsObj[key]=== undefined){
            numsObj[key] = 1
          }else{
            numsObj[key] += 1
            duplicate = true
          }
        }
        return duplicate;
};