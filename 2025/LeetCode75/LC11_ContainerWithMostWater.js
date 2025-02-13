function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const area = width * minHeight;
    maxArea = Math.max(maxArea, area);

    // Move the pointer with the smaller height inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

// Example usage
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // Output: 49
