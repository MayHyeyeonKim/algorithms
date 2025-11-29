// 219. Contains Duplicate II

const containNearbyDuplicateSet = (nums, k) => {
  const note = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (note.has(nums[i])) {
      return true;
    }
    note.add(nums[i]);
    if (note.size > k) {
      note.delete(nums[i - k]);
    }
  }
  return false;
};

console.log(containNearbyDuplicateSet([1, 2, 3, 1], 3)); // true
console.log(containNearbyDuplicateSet([1, 0, 1, 1], 1)); // true
console.log(containNearbyDuplicateSet([1, 2, 3, 1, 2, 3], 2)); // false

// map version
const containNearbyDuplicateMap = (nums, k) => {
  const note = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (note.has(nums[i]) && i - note.get(nums[i]) <= k) {
      return true;
    }
    note.set(nums[i], i);
  }
  return false;
};

console.log(containNearbyDuplicateMap([1, 2, 3, 1], 3)); // true
console.log(containNearbyDuplicateMap([1, 0, 1, 1], 1)); // true
console.log(containNearbyDuplicateMap([1, 2, 3, 1, 2, 3], 2)); // false

// set과 map 두 가지 버전 모두 시간복잡도 O(n), 공간복잡도 O(min(n, k))입니다.
// set 버전은 sliding window 기법을 사용하여 k 크기의 윈도우를 유지합니다.
// map 버전은 각 숫자의 마지막 인덱스를 저장하여 중복을 확인합니다.
