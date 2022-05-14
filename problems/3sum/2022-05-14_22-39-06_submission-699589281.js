var threeSum = function(nums) {
    let n = nums.length
    let X = 0
    if(n === 0) {
        return []
    } else if(n === 1) {
        return []
    } else {
        nums.sort((a, b) => a - b)
        let triplets = {}
        for(let i=0; i<n; i++) {
            let remTarget = X - nums[i]
            let j = i+1
            let k = n-1
            while(j < k) {
                if((nums[j] + nums[k]) > remTarget) {
                    k--
                } else if ((nums[j] + nums[k]) < remTarget) {
                    j++
                } else {
                    triplets[`${nums[i]}_${nums[j]}_${nums[k]}`] = [nums[i], nums[j], nums[k]]
                    j++
                    k--
                }
            }
        }
        return Object.keys(triplets).map(item => triplets[item])
    }
};