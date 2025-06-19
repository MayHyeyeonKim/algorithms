// 212 Word Search II

findWords = function(board, words) {
    class TrieNode {
        constructor(){
            this.children = {};
            this.word = null;
        }
    }
    // trie 구축
    const buildTrie = ()
    // dfs 탐색
    const dfs = (r,c,node) = {}

    // 보드의 각 셀에서 탐색 시작
    for(let r = 0; r < rows; r++){
        for(let c=0; c<cols; c++){
            dfs(r,c,root)
        }
    }
    return 
};
const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
const words = ["oath","pea","eat","rain"]

console.log(findWords(board,words))