// 2035. Partition Array Into Two Arrays to Minimize Sum Difference
//완준 어려움!!
/**

nums = [3,9,7,3]
이 문제의 목표는 이 배열을 반으로 나눠서 두 그룹의 합 차이를 가장 작게 만드는거
이 때 그룹의 원소의 개수는 항상 짝수로 반반 나눠야한다.
각 그룹의 합은 꼭 짝수일 필요 없음.

그럼 모든 조합을 구해보자.
[3, 9] vs [7, 3] → 차이: |12 - 10| = 2

[3, 7] vs [9, 3] → |10 - 12| = 2

[3, 3] vs [9, 7] → |6 - 16| = 10

[9, 7] vs [3, 3] → |16 - 6| = 10

[9, 3] vs [3, 7] → |12 - 10| = 2

[7, 3] vs [3, 9] → |10 - 12| = 2

이중에 최소값은 2가 되겠지

그럼 우리가 필요한거는 
1. 2개를 고르는 조합을 만들기 - 배열 길이의 절반만큼 선택 (4개면 2개고르기)
2. 각 조합의 합을 구하기
3. 두 합의 차이를 구하기 - Math.abs(sum1 - sum2)
4. 최소값 구하기
5. 모든 조합에 대해 반복하기
6. 결과 리턴하기

(시작)
  └─ 3 선택
       └─ 9 선택 → [3,9]
       └─ 7 선택 → [3,7]
       └─ 3 선택 → [3,3]
  └─ 9 선택
       └─ 7 선택 → [9,7]
       └─ 3 선택 → [9,3]
  └─ 7 선택
       └─ 3 선택 → [7,3]

백트래킹이 왜 좋은가?
    모든 경우를 다 해보되,
    쓸모없는 길은 빨리 끊어내고(되돌아가서)
    시간을 아낄 수 있음.
 */

// [1] 조합을 만들어주는 함수: arr에서 k개를 뽑는 모든 조합을 만든다
function getCombinations(arr, k) {
  const result = [];

  // 백트래킹으로 조합을 만들기
  function backtrack(start, comb) {
    if (comb.length === k) {
      result.push([...comb]); // 원하는 개수만큼 뽑으면 저장
      return;
    }

    for (let i = start; i < arr.length; i++) {
      comb.push(arr[i]); // 현재 숫자 넣기
      backtrack(i + 1, comb); // 다음 숫자 뽑으러 가기
      comb.pop(); // 마지막에 넣은 숫자 빼기 (원상복구)
    }
  }

  backtrack(0, []);
  return result; // 모든 조합을 담은 배열 반환
}

// [2] 문제를 푸는 메인 함수
function minimumDifference(nums) {
  const n = nums.length / 2; // 반으로 나눌 크기
  const combinations = getCombinations(nums, n); // [1] 조합 만들기

  let minDiff = Infinity; // 최소 차이를 저장할 변수 (처음엔 무한대로)

  // [5] 모든 조합에 대해 반복하면서
  for (let group1 of combinations) {
    // group1을 제외한 나머지 숫자로 group2 만들기
    const numsCopy = [...nums]; // 원본 복사
    for (let num of group1) {
      const idx = numsCopy.indexOf(num); // 해당 숫자의 위치 찾기
      numsCopy.splice(idx, 1); // 그 숫자 제거
    }
    const group2 = numsCopy;

    // [2] 각 조합의 합을 구하기
    const sum1 = group1.reduce((a, b) => a + b, 0);
    const sum2 = group2.reduce((a, b) => a + b, 0);

    // [3] 두 합의 차이를 구하기
    const diff = Math.abs(sum1 - sum2);

    // [4] 최소값 구하기
    minDiff = Math.min(minDiff, diff);
  }

  // [6] 결과 리턴하기
  return minDiff;
}

// 테스트
const nums = [3, 9, 7, 3];
const result = minimumDifference(nums);
console.log("최소 차이:", result); // 출력: 2
