/**
 * 미디언(중앙값)이랑 평균(산술 평균)은 서로 다른 개념임
 * Median : 모든 숫자를 순서대로 정렬한 다음, 가운데 있는 숫자야
 * Average : 모든 숫자를 더한 다음 숫자의 개수로 나눈 값
 *
 * 문제 설명 :
 * 두 줄의 숫자가 있고, 각각 작은 숫자부터 큰 숫자 순서대로 정리돼 있음
 * 두 줄을 하나로 합치고 가운데 숫자 찾는 거
 * 숫자의 개수가 짝수 개일 땐 가운데 두 숫자의 평균을 미디언이라고 한다.
 */

function findMedianSortedArrays(nums1, nums2) {
  /**
   * 작업 순서:
   * 1. 두 배열을 합친다
   * 2. 합친 배열 정렬한다
   * 3-1. 길이가 홀수일 때: 가운데 숫자 반환
   * 3-2. 길이가 짝수일 때: 가운데 두 숫자의 평균 반환
   */

  // 1. 두 배열을 합친다
  let mergedArray = nums1.concat(nums2);
  // 2. 합친 배열 정렬한다
  mergedArray.sort((a, b) => a - b);
  let n = mergedArray.length;
  console.log("n은: ", n);
  console.log(
    "mergedArray[Math.floor(n / 2)] : ",
    mergedArray[Math.floor(n / 2)]
  );
  // 3-1. 길이가 홀수일 때: 가운데 숫자 반환
  if (n % 2 === 1) {
    return mergedArray[Math.floor(n / 2)]; // 홀수 길이일 때 중앙에 있는 값을 반환
  } else {
    let mid1 = mergedArray[n / 2 - 1]; // 첫 번째 가운데 숫자
    let mid2 = mergedArray[n / 2]; // 두 번째 가운데 숫자
    return (mid1 + mid2) / 2; // 두 숫자의 평균 (2.5)을 반환
  }
}

nums1 = [1, 2];
nums2 = [3, 4];
let result = findMedianSortedArrays(nums1, nums2);
console.log(result);

/**
 * 짝수일 떄:
숫자 줄이 [1, 2, 3, 4] 이렇게 있어.
숫자가 짝수 개(4개)니까 가운데 숫자가 두 개(2랑 3)야.
이제 이 두 숫자의 평균을 구해야 해.
2랑 3을 더하면 5가 되지?
5를 2로 나누면 2.5가 나와. 그래서 미디언은 2.5!
 */
