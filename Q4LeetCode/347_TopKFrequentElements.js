//  347. Top K Frequent Elements

const topKFrequent = (nums, k) => {
  const frequentMap = new Map();

  for (let num of nums) {
    frequentMap.set(num, frequentMap.get(num) + 1 || 1);
  }

  const frequencyArray = Array.from(frequentMap.entries());

  frequencyArray.sort((a, b) => b[1] - a[1]);

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(frequencyArray[i][0]);
  }

  return result;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k)); // [1, 2]

// O(n log n) time complexity
// O(n) space complexity
