/**
 * @param {number[]} nums
 * @return {number}
 */
//  Boyer-Moore Voting Algorithm
// nums에서 과반수 요소(majority element)를 찾는 알고리즘
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num; // 후보를 현재 요소로 설정
        }
        count += (num === candidate) ? 1 : -1; // 후보와 같으면 카운트 증가, 다르면 감소
    }

    return candidate;
};


// 예를 들어, nums = [2, 2, 1, 1, 1, 2, 2]인 경우:

// 초기 상태: candidate = null, count = 0
// 첫 번째 요소 2: count가 0이므로 candidate를 2로 설정, count = 1
// 두 번째 요소 2: candidate와 같으므로 count = 2
// 세 번째 요소 1: candidate와 다르므로 count = 1로 감소
// 네 번째 요소 1: candidate와 다르므로 count = 0으로 감소
// 다섯 번째 요소 1: count가 0이므로 candidate를 1로 설정, count = 1
// 여섯 번째 요소 2: candidate와 다르므로 count = 0으로 감소
// 일곱 번째 요소 2: count가 0이므로 candidate를 2로 설정, count = 1