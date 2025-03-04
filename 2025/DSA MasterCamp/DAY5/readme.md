# DSA MasterCamp - Day 5 (Dynamic Programming - DP)

## 📌 Overview

Day 5에서는 **동적 계획법(Dynamic Programming, DP)** 을 활용하여 문제를 해결하는 방법을 학습합니다.  
DP는 부분 문제의 최적 해를 저장하여 전체 문제의 최적 해를 찾는 기법으로, 재귀 호출 및 반복문을 통해 효율적으로 문제를 해결합니다.

---

## 📖 Topics Covered

- **점화식(Recurrence Relation) 설정**
- **메모이제이션(Memoization)과 상향식(Bottom-Up) 접근법**
- **최적 부분 구조와 중복 부분 문제 개념**
- **배열 및 행렬을 활용한 DP 문제 해결**

---

## 🏆 Problems & Solutions

| Problem                              | Description                                    | Avg Time | Difficulty | Status   |
| ------------------------------------ | ---------------------------------------------- | -------- | ---------- | -------- |
| **Fibonacci Number**                 | 피보나치 수열을 DP로 계산                      | 20m      | ⭐⭐       | ⏳ Ready |
| **Maximum Sum in an Integer Matrix** | 행렬 내 최대 합 구하기                         | 32m      | ⭐⭐       | ⏳ Ready |
| **Longest Increasing Subsequence**   | 가장 긴 증가하는 부분 수열 찾기                | 41m      | ⭐⭐       | ⏳ Ready |
| **Coin Change**                      | 최소 동전 개수로 특정 금액 만들기              | 48m      | ⭐⭐       | ⏳ Ready |
| **Subsequence Sum Equals M**         | 부분 수열의 합이 M이 되는 경우 찾기            | 52m      | ⭐⭐⭐     | ⏳ Ready |
| **Climbing Stairs**                  | 계단 오르기 문제 (n-th step까지 도달하는 방법) | 23m      | ⭐⭐       | ⏳ Ready |
| **Minimum Sum of Integer Matrix**    | 행렬 내 최소 합 경로 찾기                      | 25m      | ⭐⭐       | ⏳ Ready |
| **Longest Decreasing Subsequence**   | 가장 긴 감소하는 부분 수열 찾기                | 13m      | ⭐⭐       | ⏳ Ready |
| **Adding 1, 2, 5**                   | 1, 2, 5의 합으로 특정 숫자 만들기              | 34m      | ⭐⭐       | ⏳ Ready |

---

## 📌 Key Learnings

1. **점화식(Recurrence Relation) 설정**

   - `dp[i] = dp[i-1] + dp[i-2]` 등의 관계를 정의하여 최적 해를 찾음.
   - 피보나치 수열, 계단 오르기 문제에서 활용.

2. **메모이제이션(Memoization)과 상향식 접근법**

   - **탑다운(Top-Down) 방식:** 재귀 + 캐싱을 활용하여 불필요한 연산 방지.
   - **바텀업(Bottom-Up) 방식:** 반복문을 활용하여 작은 문제부터 차례대로 해결.

3. **부분 수열 및 최적화 문제**

   - **LIS (Longest Increasing Subsequence):** DP + 이진 탐색으로 최적화 가능.
   - **Coin Change 문제:** 최소 동전 개수 찾기 (`dp[i] = min(dp[i], dp[i-coin] + 1)`).

4. **경로 찾기 및 행렬 연산**
   - **2D DP를 활용한 최단/최대 경로 탐색** (예: Minimum Sum of Integer Matrix).
   - **부분 수열의 합과 관련된 문제 해결** (예: Subsequence Sum Equals M).

---

## 🏁 Next Steps

- **Day 6에서는 해시셋(HashSet)과 해시맵(HashMap) 기법을 학습합니다.**
- 해시를 활용한 빠른 검색, 데이터 저장 기법을 익히고, 효율적인 문제 해결 능력을 기를 예정입니다.

---
