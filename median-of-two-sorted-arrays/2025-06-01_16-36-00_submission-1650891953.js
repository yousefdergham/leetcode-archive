/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort()
    let middle = Math.floor(arr.length/2)
   if(arr.length % 2===0){
   return (arr[middle] +arr[middle-1])/2
   }else{
  return arr[middle]
   }
};