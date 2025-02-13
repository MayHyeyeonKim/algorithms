/**
 * 692. Top K Frequent Words
 * https://leetcode.com/problems/top-k-frequent-words/description/?envType=study-plan-v2&envId=apple-spring-23-high-frequency
 * heap
 */

/**
✅ 우선순위 큐(Priority Queue)와 힙(Heap)의 관계

📌 우선순위 큐(Priority Queue)란?

일반적인 FIFO(First-In-First-Out) 구조인 큐와 달리, 우선순위가 높은 요소를 먼저 처리하는 큐.
삽입 순서가 아니라 **값의 크기(우선순위)**에 따라 요소가 정렬됨.

📌 우선순위 큐(Priority Queue)를 구현하는 대표적인 방법이 "힙(Heap)"!

Min-Heap (최소 힙) → 우선순위가 낮은 값이 먼저 나옴 (예: 작은 숫자가 먼저 처리됨).
Max-Heap (최대 힙) → 우선순위가 높은 값이 먼저 나옴 (예: 큰 숫자가 먼저 처리됨).
즉, "모든 힙이 우선순위 큐는 아니지만, 대부분의 우선순위 큐는 힙으로 구현됨"
(힙 외에도 정렬된 배열, 이진 탐색 트리 등으로도 구현 가능함).

 */

// 하지만 이건 Heap이 아니고 그냥 정렬!
var topKFrequent = function (words, k) {
  let freqMap = new Map();

  // 1. 단어 빈도수 계산
  for (let word of words) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  // 2. 정렬: 빈도 내림차순, 같은 빈도면 알파벳 오름차순
  let sortedWords = [...freqMap.keys()].sort((a, b) => {
    let freqDiff = freqMap.get(b) - freqMap.get(a);
    return freqDiff !== 0 ? freqDiff : a.localeCompare(b);
  });

  // 3. 상위 k개 반환
  return sortedWords.slice(0, k);
};
