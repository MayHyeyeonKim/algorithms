// 2966. Divide Array Into Arrays With Max Difference

function canDivideArray(nums, k) {
  let result = [];
  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 3) {
    const group = [sorted[i], sorted[i + 1], sorted[i + 2]].filter((num) => num !== undefined);

    if (group[2] - group[0] > k) {
      return [];
    }
    result.push(group);
  }
  return result;
}

console.log(canDivideArray([3, 6, 1, 2, 5, 4], 2)); // [[1,2,3],[4,5,6]]
console.log(canDivideArray([1, 5, 3, 8, 4, 2], 3)); // []
console.log(canDivideArray([10, 12, 14, 16], 3)); // []
