var trap = function (height) {
  /**
    이 문제는 입력으로 전체 높이 배열이 들어온다.
    출력으로 고일 수 있는 물의 총량을 구한다.
    
    질문: "어떻게 각 위치 i에서 얼만큼의 물이 고일 지 계산할 수 있을까? 어떤 공식이 만들어 질까?"
    조건: 
        - 물은 양 옆보다 낮은 곳에서 고인다
        - 양쪽중 낮은 쪽의 최대 높이 - 현재높이 = 고일 수 있는 물의 양이 나온다.
        - 이때 바로 가까운 인덱스의 벽이 아닌, 현재 인덱스 기준으로 왼쪽 오른쪽 전체에서 가장 높은 벽과 가장 낮은 벽을 비교 해야한다.
        (물이 고이려면, 양쪽에서 현재 지점을 감싸는 벽이 필요하다.
        이때, 물이 넘치지 않으려면 양쪽 벽 중 낮은 쪽이 물 높이의 한계가 된다.
        따라서 단순히 가까운 벽이 아닌, 전체에서 가장 높은 벽을 비교해야 정확하게 물이 고일 수 있는지 판단할 수 있다.)
    
        water[i] = Math.min(leftMax[i], rightMax[i]) - height[i]
        leftMax[i] = max(leftMax[i-1], height[i])
        rightMax[i] = max(rightMax[i+1], height[i])
    
     */

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      //즉 왼쪽만 기준으로 판단해도 된다는 뜻이니까
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
};
