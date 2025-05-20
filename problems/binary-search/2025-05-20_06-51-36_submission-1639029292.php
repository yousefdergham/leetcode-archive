class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function search($nums, $target) {
        $start = 0;
        $end = count($nums) - 1;
        while($start<=$end){
            $mid = floor($start + $end)/2;
            if($nums[$mid]==$target){
                return $mid;
            }
          if($nums[$mid]<$target){
          $start = $mid +1;
          }else{
           $end = $mid -1;
          }
        }
        return -1;
    }
}