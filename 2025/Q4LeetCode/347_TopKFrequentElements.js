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

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// 1. Min Heap 방식 (O(n log k))
// 2. Bucket Sort 방식 (O(n))
