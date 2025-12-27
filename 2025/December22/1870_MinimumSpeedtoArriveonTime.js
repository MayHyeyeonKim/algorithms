// 1870. Minimum Speed to Arrive on Time

function minSpeedOnTime(dist, hour) {
  const n = dist.length;

  const canArrive = (speed) => {
    let time = 0;

    for (let i = 0; i < n; i++) {
      const t = dist[i] / speed;
      time += i === n - 1 ? t : Math.ceil(t);
      if (time > hour) return false;
    }
    return time <= hour;
  };

  let left = 1,
    right = 10_000_000;
  let answer = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canArrive(mid)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

console.log(minSpeedOnTime([1, 3, 2], 6)); // 1
console.log(minSpeedOnTime([1, 3, 2], 2.7)); // 3
console.log(minSpeedOnTime([1, 3, 2], 1.9)); // -1
