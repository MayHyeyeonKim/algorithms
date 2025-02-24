# DSA MasterCamp - Day 4 (DFS / BFS)

## 📌 Overview

Day 4에서는 **깊이 우선 탐색(DFS)와 너비 우선 탐색(BFS)** 을 활용한 그래프 탐색 기법을 학습합니다.  
DFS와 BFS는 그래프에서 특정 노드를 방문하거나 최단 경로를 찾을 때 사용되는 핵심적인 알고리즘입니다.

---

## 📖 Topics Covered

- **DFS(Depth-First Search) - 깊이 우선 탐색**
- **BFS(Breadth-First Search) - 너비 우선 탐색**
- **그래프 탐색을 활용한 경로 찾기**
- **최단 경로 문제 해결**
- **연결 요소 및 영역 구분 문제 해결**

---

## 🏆 Problems & Solutions

| Problem                                                      | Description                                | Avg Time | Difficulty | Status   |
| ------------------------------------------------------------ | ------------------------------------------ | -------- | ---------- | -------- |
| **Graph Traversal**                                          | 그래프의 모든 노드를 탐색하는 DFS/BFS 문제 | 55m      | ⭐⭐       | ⏳ Ready |
| **Determine Two-Direction Escape Possibility**               | 두 방향으로 탈출 가능 여부 판별            | 35m      | ⭐⭐       | ⏳ Ready |
| **Determine the Possibility of Escaping in Four Directions** | 네 방향으로 이동 가능한지 확인             | 40m      | ⭐⭐       | ⏳ Ready |
| **Escape with the Shortest Path**                            | 최단 경로를 이용한 탈출 문제 (BFS)         | 27m      | ⭐⭐       | ⏳ Ready |
| **Distinguishing Villages**                                  | 마을(그래프의 연결 요소) 구분하기          | 36m      | ⭐⭐       | ⏳ Ready |
| **Safe Zone**                                                | 안전 구역을 구별하는 문제 (DFS/BFS 활용)   | 67m      | ⭐⭐       | ⏳ Ready |
| **Reachable Areas**                                          | 주어진 지점에서 도달 가능한 영역 찾기      | 33m      | ⭐⭐       | ⏳ Ready |
| **Knight**                                                   | 체스판에서 나이트 이동 경로 찾기           | 22m      | ⭐⭐       | ⏳ Ready |

---

## 📌 Key Learnings

1. **DFS(깊이 우선 탐색)**

   - 스택 또는 재귀를 활용하여 깊이 우선으로 탐색.
   - 그래프의 연결 요소 개수 세기, 미로 탐색 등에서 활용.

2. **BFS(너비 우선 탐색)**

   - 큐(Queue)를 사용하여 가까운 노드부터 탐색.
   - 최단 경로 찾기 문제(미로 탈출, 나이트 이동 등)에서 활용.

3. **그래프 탐색을 활용한 문제 해결**

   - `visited` 배열을 활용한 중복 방문 방지.
   - 네 방향 또는 특정 규칙에 따른 이동.

4. **최단 경로 문제 해결**
   - BFS를 활용하여 최단 경로를 찾는 방법 학습.
   - `dist` 배열을 활용하여 경로 길이 저장.

---

## 🏁 Next Steps

- **Day 5에서는 동적 계획법(Dynamic Programming, DP)을 학습합니다.**
- DP를 활용하여 최적의 해를 찾고, 점화식을 기반으로 효율적인 문제 해결 능력을 키울 예정입니다.

---
