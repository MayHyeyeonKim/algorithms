// 1762. Buildings With an Ocean View

const findBuildings = () => {
  const result = [];
  let max = -1;

  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      result.push(i);
      max = heights[i];
    }
  }
  return result.reverse();
};

const heights = [4, 2, 3, 1];
console.log(findBuildings(heights)); // [0, 2, 3]
