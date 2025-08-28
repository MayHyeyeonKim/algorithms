function findBuildings(heights) {
  const result = [];
  let max = -1;

  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      result.push(i);
      max = heights[i];
    }
  }

  return result.reverse(); // 오름차순 정렬
}

console.log(findBuildings([4, 2, 3, 1])); // [0, 2, 3]
