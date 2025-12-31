// 2962. Count Subarrays Where Max Element Appears at Least K Times

/** 최댓값이 k번 모이는 순간, 그 뒤에 끝나는 모든 구간은 전부 정답 */

/**
function countSubarrays(nums, k) {
    const max = Math.max(...nums); // 1️⃣ 최댓값
    let countMax = 0;              // 최댓값 개수
    let left = 0;
    let answer = 0;

    // 2️⃣ 오른쪽으로 하나씩 늘리기
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === max) {
        countMax++;
        }

        // 3️⃣ 최댓값이 k개 이상이면 왼쪽 줄이기
        while (countMax >= k) {
        if (nums[left] === max) {
            countMax--;
        }
        left++;
        }

        // 4️⃣ 여기서 한 번에 더하기
        answer += left;
    }

    return answer;
}
 */
