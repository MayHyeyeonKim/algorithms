import java.util.*;

public class WordSearch {

    public static void main(String[] args) {
        System.out.println("Hey");
    }
}

/**
 * word의 첫 글자와 현재위치의 문자가 같다면 탐색 시작!
 * 다음 글자 찾기위해 상화좌우 이동
 * 이미 방문한 셀은 다시 못 가게 visited 표시
 * 다음 글자가 없으면 성공!
 * 틀리면 원상복구 - 백트래킹 - 다른 경로 시도!
 */