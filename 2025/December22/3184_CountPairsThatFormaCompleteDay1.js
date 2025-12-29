// 3184. Count Pairs That Form a Complete Day I

function countCompleteDayPairs(hours) {
  const count = new Array(24).fill(0);
  let pairs = 0;

  for (const t of hours) {
    const hoursLeft = t % 24;
    const partnerHoursLeft = (24 - hoursLeft) % 24;

    pairs += count[partnerHoursLeft];
    count[hoursLeft] += 1;
  }
  return pairs;
}

// Example usage:
const hours = [1, 23, 12, 12, 0];
console.log(countCompleteDayPairs(hours)); // 2
