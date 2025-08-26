/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  let remain = 0
  for (let i = 0; i < fruits.length; i++) {
    let placed = false
    for (let j = 0; j < baskets.length; j++) {
      if (fruits[i] <= baskets[j]) {
    
        placed = true
        baskets.splice(j, 1)
        break;
      }
    }
    if (!placed) {
      remain++
    }

  }
  return remain
};