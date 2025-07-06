class FindSumPairs {
    constructor(nums1, nums2) {
        this.n1 = nums1;
        this.n2 = nums2;
    }

    add(index, val) {
        this.n2[index] += val;
    }

    count(tot) {
        let freq = new Map();
        for (let y of this.n2) {
            freq.set(y, (freq.get(y) || 0) + 1);
        }
        let res = 0;
        for (let x of this.n1) {
            res += freq.get(tot - x) || 0;
        }
        return res;
    }
}