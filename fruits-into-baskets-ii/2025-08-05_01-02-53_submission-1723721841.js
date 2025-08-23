/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  let remain = 0
  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < baskets.length; j++) {
      if (fruits[i] <= baskets[j]) {
        continue;
      } else if (j == baskets.length - 1) {
        remain++
      }

    }

  }
  return remain
};