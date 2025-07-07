/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  events.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
  let usedDays = new Set();
  for (let event of events) {
    for (let day = event[0]; day <= event[1]; day++) {
      if (!usedDays.has(day)) {
        usedDays.add(day);
        break;
      }
    }
  }

  return usedDays.size;
};