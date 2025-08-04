/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let begin = 0;
    let windowState = new Map();
    let result = 0;

    for (let end = 0; end < fruits.length; end++) {
        const currFruit = fruits[end];

        if (windowState.has(currFruit)) {
            const newCout = windowState.get(currFruit) + 1;

            windowState.set(currFruit, newCout);
        } else {
            windowState.set(currFruit, 1);
        }

        while (windowState.size > 2) {
            const beginFruit = fruits[begin];
            const beginFruitNewValue = windowState.get(beginFruit) - 1;

            if (beginFruitNewValue === 0) {
                windowState.delete(beginFruit);
            } else {
                windowState.set(beginFruit, beginFruitNewValue);
            }

            begin++;
        }

        result = Math.max(result, end - begin + 1);
    }

    return result;
};