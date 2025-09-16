/*
Replace Non-Coprime Numbers in Array
Difficulty: Hard
Language: JavaScript
Runtime: 22 ms
Memory: 82.7 MB
Submitted: 2025-09-16T13:39:08.329Z
Link: https://leetcode.com/problems/replace-non-coprime-numbers-in-array/submissions/1772767702/?envType=daily-question&envId=2025-09-16
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function (nums) {
    const stack = [];

    const gcd = (a, b) => {
        while (b !== 0) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a;
    };

    for (let num of nums) {
        while (stack.length > 0) {
            const top = stack[stack.length - 1];
            const g = gcd(top, num);
            if (g === 1) {
                break;
            }
            stack.pop();
            num = (top / g) * num;
        }
        stack.push(num);
    }

    return stack;
};