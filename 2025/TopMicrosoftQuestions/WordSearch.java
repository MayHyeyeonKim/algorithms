import java.util.*;

class WordSearch {
    public boolean exist(char[][] board, String word) {
        int ROWS = board.length; // 3
        int COLS = board[0].length; // 4

        for (int r = 0; r < ROWS; r++) {
            for (int c = 0; c < COLS; c++) {
                if (board[r][c] == word.charAt(0) && dfs(board, r, c, 0, word)) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean dfs(char[][] board, int r, int c, int idx, String word) {
        if (idx == word.length())
            return true;
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length)
            return false;
        if (board[r][c] != word.charAt(idx))
            return false;

        char temp = board[r][c];
        board[r][c] = '#';

        int[][] directions = { { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } };
        for (int[] d : directions) {
            if (dfs(board, r + d[0], c + d[1], idx + 1, word)) {
                return true;
            }
        }
        board[r][c] = temp; // 다른 경로에서는 그 칸을 다시 쓸 수 있으니까 돌려놓기
        return false;
    }

    public static void main(String[] args) {
        WordSearch WS = new WordSearch();

        char[][] board = {
                { 'A', 'B', 'C', 'E' },
                { 'S', 'F', 'C', 'S' },
                { 'A', 'D', 'E', 'E' }
        };

        String word1 = "ABCCED";
        String word2 = "SEE";
        String word3 = "ABCB";

        System.out.println(WS.exist(board, word1));
        System.out.println(WS.exist(board, word2));
        System.out.println(WS.exist(board, word3));
    }
}

/**
 * word의 첫 글자와 현재위치의 문자가 같다면 탐색 시작!
 * 다음 글자 찾기위해 상화좌우 이동
 * 이미 방문한 셀은 다시 못 가게 visited 표시
 * 다음 글자가 없으면 성공!
 * 틀리면 원상복구 - 백트래킹 - 다른 경로 시도!
 */