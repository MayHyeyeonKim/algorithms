// 2246. Longest Path With Different Adjacent Characters
/**
1. 트리를 만든다 (adjacency list)
2. DFS(node):
    - 현재 노드 기준으로 자식들 순회
    - 문자가 다른 자식에서 가장 긴 경로 2개 선택
    - maxPath 갱신: max(maxPath, 1 + 가장 긴 경로 2개 합)
    - 리턴: 1 + 가장 긴 경로 하나 (자식 방향으로 내려가는 최대 길이)


parent = [-1, 0, 0, 1, 1, 2]
s = "abacbe"

        0(a)
       /   \
     1(b)   2(a)
     /   \     \
   3(c)  4(b)  5(e)

경로: 0 → 1 → 3 (a → b → c) → 길이 3

 */

function longestPath(parent, s) {
  const n = parent.length;
  const tree = Array.from({ length: n }, () => []);

  for (let i = 1; i < n; i++) {
    tree[parent[i]].push(i);
  }

  //   console.log("트리? ", tree);

  console.log("📦 트리 구조:");
  tree.forEach((children, parent) => {
    console.log(`${parent}: [${children.join(", ")}]`);
  });

  let max = 0;

  function dfs(node) {
    let longest = 0;
    let second = 0;

    for (let child of tree[node]) {
      const childLen = dfs(child);
      if (s[child] !== s[node]) {
        if (childLen > longest) {
          second = longest;
          longest = childLen;
        } else if (childLen > second) {
          second = childLen;
        }
      }
    }

    max = Math.max(max, longest + second);
    return 1 + longest;
  }
  dfs(0);
  return max;
}

// ✅ 테스트 코드
const parent = [-1, 0, 0, 1, 1, 2];
const s = "abacbe";

const result = longestPath(parent, s);
console.log("✅ Longest path length:", result); // 예상 출력: 3
