/*
Minimum Number of People to Teach
Difficulty: Medium
Language: JavaScript
Runtime: 41 ms
Memory: 66.5 MB
Submitted: 2025-09-10T08:43:07.919Z
Link: https://leetcode.com/problems/minimum-number-of-people-to-teach/submissions/1765832673/?envType=daily-question&envId=2025-09-10
*/

/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (totalLanguages, userLanguages, friendships) {
    let usersToTeach = new Set();

    for (let [u1, u2] of friendships) {
        u1 -= 1;
        u2 -= 1;
        let canCommunicate = false;

        for (let lang1 of userLanguages[u1]) {
            for (let lang2 of userLanguages[u2]) {
                if (lang1 === lang2) {
                    canCommunicate = true;
                    break;
                }
            }
            if (canCommunicate) break;
        }

        if (!canCommunicate) {
            usersToTeach.add(u1);
            usersToTeach.add(u2);
        }
    }

    let minUsersToTeach = userLanguages.length + 1;

    for (let lang = 1; lang <= totalLanguages; lang++) {
        let count = 0;

        for (let user of usersToTeach) {
            if (!userLanguages[user].includes(lang)) {
                count++;
            }
        }

        minUsersToTeach = Math.min(minUsersToTeach, count);
    }

    return minUsersToTeach;
};