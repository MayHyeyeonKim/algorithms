# DSA MasterCamp - Day 3 (Backtracking)

## 📌 Overview

Day 3에서는 **백트래킹(Backtracking)** 기법을 활용하여 최적의 해를 찾는 문제 해결 방법을 학습합니다.  
백트래킹은 모든 가능한 경우를 탐색하면서 조건에 맞지 않는 경로를 빠르게 포기하는 기법입니다.

---

## 📖 Topics Covered

- **조합(Combination)과 순열(Permutation)**
- **조건을 만족하는 선택 문제**
- **최적화 문제에서 백트래킹 활용**
- **비트 연산을 통한 탐색 기법**

---

## 🏆 Problems & Solutions

| Problem                                                            | Description                            | Avg Time | Difficulty | Status   |
| ------------------------------------------------------------------ | -------------------------------------- | -------- | ---------- | -------- |
| **Selecting 1 out of K, N times**                                  | K개의 원소 중 하나를 N번 선택하는 문제 | 40m      | ⭐⭐⭐     | ⏳ Ready |
| **Selecting 1 out of K Numbers N Times Under Specific Conditions** | 특정 조건을 만족하며 N번 선택하는 문제 | 21m      | ⭐⭐       | ⏳ Ready |
| **Selecting M out of N**                                           | N개 중 M개를 선택하는 조합 문제        | 31m      | ⭐⭐⭐     | ⏳ Ready |
| **Permutations of Size N**                                         | N개 원소의 순열을 생성하는 문제        | 17m      | ⭐⭐       | ⏳ Ready |
| **Beautiful Numbers**                                              | 특정 조건을 만족하는 숫자 조합 찾기    | 115m     | ⭐⭐⭐     | ⏳ Ready |
| **1D Yutnori Game**                                                | 1차원 윷놀이에서 최적의 이동 경로 탐색 | 48m      | ⭐⭐⭐     | ⏳ Ready |
| **Maximizing XOR Result**                                          | XOR 연산을 활용한 최적의 수 조합 찾기  | 28m      | ⭐⭐       | ⏳ Ready |
| **Reverse Permutation**                                            | 주어진 순열을 역순으로 변환하는 문제   | 6m       | ⭐⭐       | ⏳ Ready |

---

## 📌 Key Learnings

1. **백트래킹(Backtracking) 기본 원리**

   - 가능한 모든 경우를 탐색하되, 불가능한 경로는 조기에 가지치기(Pruning).
   - DFS(깊이 우선 탐색)와 함께 활용.

2. **조합(Combination)과 순열(Permutation)**

   - `nCr` 조합: `N`개 중 `R`개를 선택하는 방법.
   - `nPn` 순열: `N`개의 원소를 모든 가능한 순서로 나열.

3. **최적화된 탐색 기법**

   - 비트 마스킹(Bitmasking)과 XOR 연산을 활용한 조합 최적화.
   - 탐색 속도를 높이기 위한 조건 가지치기.

4. **게임 문제에서의 백트래킹 활용**
   - 최적의 이동 경로 찾기 (예: 윷놀이 게임).
   - 특정 규칙을 만족하는 경로 탐색.

---

## 🏁 Next Steps

- **Day 4에서는 DFS/BFS(깊이/너비 우선 탐색) 기법을 학습합니다.**
- 탐색 기반 문제 해결 능력을 기르고, 그래프 탐색과 백트래킹을 결합하여 문제 해결력을 확장할 예정입니다.

---
