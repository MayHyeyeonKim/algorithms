# DSA MasterCamp - Day 7 (Prefix Sum / LR Techniques)

## 📌 Overview

Day 7에서는 **누적 합(Prefix Sum)과 구간 연산(LR Techniques)** 을 활용하여 문제를 효율적으로 해결하는 방법을 학습합니다.  
이 기법은 배열의 구간 합을 빠르게 계산하거나, 특정 범위의 값을 업데이트하는 문제에서 자주 사용됩니다.

---

## 📖 Topics Covered

- **누적 합(Prefix Sum)**
- **구간 연산(LR Techniques)**
- **슬라이딩 윈도우(Sliding Window)**
- **효율적인 부분합 및 개수 세기**
- **투 포인터(Two Pointers)를 활용한 최적화**

---

## 🏆 Problems & Solutions

| Problem                                   | Description                           | Avg Time | Difficulty | Status   |
| ----------------------------------------- | ------------------------------------- | -------- | ---------- | -------- |
| **Sum of Integers 2**                     | 주어진 정수 배열의 합 구하기          | 23m      | ⭐⭐       | ⏳ Ready |
| **Sum of Integers 3**                     | 확장된 정수 합 문제                   | 37m      | ⭐⭐       | ⏳ Ready |
| **Counting Points 3**                     | 특정 범위 내 개수 세기                | 53m      | ⭐⭐       | ⏳ Ready |
| **Taking a Taxi During a Marathon**       | 마라톤 중 택시를 이용하는 최적의 방법 | 108m     | ⭐⭐       | ⏳ Ready |
| **Sum of Subsequence Equals K**           | 부분 수열의 합이 K가 되는 경우 찾기   | 22m      | ⭐⭐       | ⏳ Ready |
| **Counting Points 2**                     | 특정 범위 내 점 개수 빠르게 세기      | 161m     | ⭐⭐⭐     | ⏳ Ready |
| **Rock-Paper-Scissors with Future Sight** | 미래를 고려한 가위바위보 전략 최적화  | 68m      | ⭐⭐       | ⏳ Ready |

---

## 📌 Key Learnings

1. **누적 합(Prefix Sum) 활용**

   - 특정 구간의 합을 `O(1)`에 구하는 방법 (`prefix[i] = prefix[i-1] + arr[i]`).
   - `Sum of Integers` 문제에서 효율적인 풀이 적용.

2. **구간 연산(LR Techniques)**

   - 특정 범위의 값을 빠르게 변경하는 방법 (`arr[L] += X`, `arr[R+1] -= X` 후 누적 합 적용).
   - `Counting Points` 문제에서 활용.

3. **슬라이딩 윈도우(Sliding Window)**

   - 고정 크기 또는 가변 크기의 윈도우를 사용하여 문제 해결.
   - `Sum of Subsequence Equals K` 문제에서 연속된 부분합 찾기에 적용.

4. **투 포인터(Two Pointers) 기법**
   - 두 개의 포인터를 이동시키면서 최적의 값을 찾음.
   - `Taking a Taxi During a Marathon` 문제에서 경로 최적화.

---

## 🏁 Next Steps

- **Day 8에서는 +1/-1 테크닉과 트릭(Tech & Tricks)을 학습합니다.**
- 수학적 아이디어 및 효율적인 알고리즘을 적용하는 방법을 익힙니다.

---
