/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  events.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

  let minDay = events[0][0];
  let maxDay = events[0][1];
  for (let event of events) {
    minDay = Math.min(minDay, event[0]);
    maxDay = Math.max(maxDay, event[1]);
  }

  let count = 0;
  let eventIndex = 0;

  for (let day = minDay; day <= maxDay; day++) {
    while (eventIndex < events.length && events[eventIndex][1] < day) {
      eventIndex++;
    }

    let currentIndex = eventIndex;
    while (currentIndex < events.length && events[currentIndex][0] <= day) {
      if (events[currentIndex][1] >= day) {
        count++;
        eventIndex = currentIndex + 1;
        break;
      }
      currentIndex++;
    }
  }

  return count;
};