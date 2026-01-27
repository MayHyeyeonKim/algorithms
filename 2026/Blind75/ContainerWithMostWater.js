// 11. Container With Most Water
// 문제: 높이가 다른 수직선들이 주어질 때, 두 선을 선택하여 x축과 함께 
// 만들 수 있는 컨테이너 중 가장 많은 물을 담을 수 있는 넓이를 구하기
// 넓이 = min(height[left], height[right]) × (right - left)

// Time: O(n), Space: O(1)
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    
    while (left < right) {
        // 현재 넓이 계산
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = width * currentHeight;
        
        // 최대 넓이 업데이트
        maxArea = Math.max(maxArea, currentArea);
        
        // 더 작은 높이를 가진 포인터를 이동
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};

// 예제
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
// 설명: 인덱스 1(높이 8)과 인덱스 8(높이 7) 사이
// 넓이 = min(8, 7) × (8 - 1) = 7 × 7 = 49

console.log(maxArea([1,1])); // 1
// 설명: 두 선 사이의 넓이 = min(1, 1) × (1 - 0) = 1
