/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = Array(nums.length).fill(1); // 결과 배열 초기화 (모두 1로 설정)
  let left = 1; // 왼쪽 곱을 저장할 변수

  // 왼쪽에서 곱 계산
  for (let i = 0; i < nums.length; i++) {
    result[i] *= left; // 현재 인덱스까지의 왼쪽 곱을 결과 배열에 저장
    left *= nums[i]; // left 값을 업데이트 (현재 값 곱하기)
  }

  let right = 1; // 오른쪽 곱을 저장할 변수

  // 오른쪽에서 곱 계산
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right; // 현재 인덱스까지의 오른쪽 곱을 결과 배열에 저장
    right *= nums[i]; // right 값을 업데이트 (현재 값 곱하기)
  }

  return result; // 최종 결과 반환
};
