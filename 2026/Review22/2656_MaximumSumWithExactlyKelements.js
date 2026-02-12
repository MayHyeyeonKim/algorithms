// 2656. Maximum Sum With Exactly K Elements

function maximumSum(nums, k) {
  const m = Math.max(...nums);
  return k * m + (k * (k - 1)) / 2;
}

/**
 k * m + (k * (k - 1)) / 2;


m, m+1, m+2, ..., m+(k-1)

score = m + (m+1) + (m+2) + ... + (m+(k-1))
m + m + m + ... (총 k개)
k * m

0, 1, 2, 3, ..., (k-1)
= 0 + 1 + 2 + ... + (k-1) = (k * (k - 1)) / 2

( m이 k번 나온 합 ) + ( 추가로 붙은 숫자들의 합 )
= k * m + (k * (k - 1)) / 2
 */
