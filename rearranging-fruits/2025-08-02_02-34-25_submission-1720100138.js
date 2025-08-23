/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
const minCost = (basket1, basket2) => {
    const n = basket1.length;

    const map1 = new Map();
    const map2 = new Map();
    let minVal = Infinity;

    for (let i = 0; i < n; i++) {
        map1.set(basket1[i], (map1.get(basket1[i]) || 0) + 1);
        map2.set(basket2[i], (map2.get(basket2[i]) || 0) + 1);
        minVal = Math.min(minVal, basket1[i]);
        minVal = Math.min(minVal, basket2[i]);
    }

    const swapList1 = [];
    for (const [key, count1] of map1.entries()) {
        const count2 = map2.get(key) || 0;
        if ((count1 + count2) % 2 === 1) return -1;
        if (count1 > count2) {
            let addCnt = (count1 - count2) / 2;
            while (addCnt-- > 0) {
                swapList1.push(key);
            }
        }
    }

    const swapList2 = [];
    for (const [key, count2] of map2.entries()) {
        const count1 = map1.get(key) || 0;
        if ((count1 + count2) % 2 === 1) return -1;
        if (count2 > count1) {
            let addCnt = (count2 - count1) / 2;
            while (addCnt-- > 0) {
                swapList2.push(key);
            }
        }
    }

    swapList1.sort((a, b) => a - b);
    swapList2.sort((a, b) => b - a);

    let res = 0;
    for (let i = 0; i < swapList1.length; i++) {
        res += Math.min(2 * minVal, Math.min(swapList1[i], swapList2[i]));
    }

    return res;
};