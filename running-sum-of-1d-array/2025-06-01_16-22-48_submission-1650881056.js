/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let result = []
    for(let i = 0; i<nums.length;i++){
      if(i>0){
      result.push(result[i-1]+nums[i])
      }else{
        result.push(nums[i])
      }
    }
    return result;
};