/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(m>0){
      num1Filterd = nums1.filter((x)=>x>0)
    }
    if(n>0){
      num2Filterd = nums2.filter((x)=>x>0)
    }
    let arr=num1Filterd?.concat(num2Filterd):num2Filterd
    return arr.sort()
};