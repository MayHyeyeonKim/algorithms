import java.util.*;

public class WordLadder {

    public int ladderLength(String beginword, String endWord, List<String> wordList) {
        // login here!
    }

    private static class Pair {
        // inner class를 만들어서 word, level만 묶어서 저장하는 용도로 쓰자
    }

    public static void main(String[] args) {
        WordLadder wl = new WordLadder();
        String beginWord = "hit";
        String endWord = "cog";
        List<String> wordList = Arrays.asList("hot", "dot", "dog", "lot", "log", "cog");

        int result = wl.ladderLength(beginWord, endWord, wordList);
        System.out.println("result: " + result);
    }
}
