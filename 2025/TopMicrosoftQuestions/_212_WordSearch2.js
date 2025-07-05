// --- Trie Node 정의 ---
class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

// --- Trie 구축 함수 ---
function buildTrie(words) {
  const root = new TrieNode();
  for (let word of words) {
    let node = root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.word = word;
  }
  return root;
}

// --- 메인 함수 ---
var findWords = function (board, words) {
  const result = [];
  const root = buildTrie(words);
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r, c, node) {
    const char = board[r][c];
    const nextNode = node.children[char];
    if (!nextNode) return;

    if (nextNode.word) {
      result.push(nextNode.word);
      nextNode.word = null; // 중복 방지
    }

    board[r][c] = "#"; // 방문 표시

    for (const [dr, dc] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] !== "#") {
        dfs(nr, nc, nextNode);
      }
    }

    board[r][c] = char; // 복구
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root);
    }
  }

  return result;
};

// --- 실행 예제 ---
const board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];

const words = ["oath", "pea", "eat", "rain"];

const foundWords = findWords(board, words);
console.log("찾은 단어들:", foundWords);
