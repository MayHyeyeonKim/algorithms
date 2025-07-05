// 1578. Minimum Time to Make Rope Colorful

const minCost = (colors, neededTime) => {
  let totalCost = 0;

  for (let i = 1; i < colors.length; i++) {
    if (colors[i] === colors[i - 1]) {
      totalCost += Math.min(neededTime[i], neededTime[i - 1]);
      neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
    }
  }
  return totalCost;
};

let colors = "abaac";
let neededTime = [1, 2, 3, 4, 5];

console.log(minCost(colors, neededTime));
