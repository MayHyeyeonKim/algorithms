/**
이 문제는 주어진 오른차순 정렬된 정수 배열 nums에서 중복된 요소를 제거하고, 남은 요소들을 유지한 채 처음 몇 개의 요소를 반환하는 문제이다.
반환값은 중복을 제거한 뒤의 고유한 요소 개수, 배열은 제자리(in-place)에서 수정되어야 한다.
즉, 새로운 배열을 생성하지 않고 입력 배열 자체를 수정해야 한다.

공간 복잡도는 O(1)아어야 한다.

투포인터기법을 사용하여 해결할 수 있다.
 i포인터(느린) : 고유한 요소를 저장하는 위치를 가리킨다
 j포인터(빠른) : 배열을 순회하면서 중복이 아닌 새 요소를 찾는다
배열을 처음부터 순회하고(j포인터이동)중복이 아닌 새로운 값이 나오면 i포인터 위치를 갱신하고 값을 저장한다.
 */

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

nums = [0, 1, 1, 2, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
