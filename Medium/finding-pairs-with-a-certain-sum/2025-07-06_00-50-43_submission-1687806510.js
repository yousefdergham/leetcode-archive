class FindSumPairs {
    constructor(nums1, nums2) {
        this.n1 = nums1;
        this.n2 = nums2;
        this.freq = new Map();
        for (let x of nums2) {
            this.freq.set(x, (this.freq.get(x) || 0) + 1);
        }
    }

    add(index, val) {
        let old = this.n2[index];
        this.freq.set(old, this.freq.get(old) - 1);
        this.n2[index] += val;
        let updated = this.n2[index];
        this.freq.set(updated, (this.freq.get(updated) || 0) + 1);
    }

    count(tot) {
        let res = 0;
        for (let x of this.n1) {
            res += this.freq.get(tot - x) || 0;
        }
        return res;
    }
}