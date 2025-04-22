import java.util.PriorityQueue;

public class LogestHappyString {
    public String longestDiverseString(int a, int b, int c) {
        PriorityQueue<Letter> maxHeap = new PriorityQueue<>((x, y) -> y.count - x.count);

        if (a > 0)
            maxHeap.offer(new Letter('a', a));
        if (b > 0)
            maxHeap.offer(new Letter('b', b));
        if (c > 0)
            maxHeap.offer(new Letter('c', c));

        StringBuilder sb = new StringBuilder();

        while (!maxHeap.isEmpty()) {
            Letter first = maxHeap.poll();

            int len = sb.length();
            if (len >= 2 && sb.charAt(len - 1) == first.ch && sb.charAt(len - 2) == first.ch) {
                if (maxHeap.isEmpty())
                    break;

                Letter second = maxHeap.poll();
                sb.append(second.ch);
                second.count--;
                if (second.count > 0) {
                    maxHeap.offer(second);
                }
                maxHeap.offer(first);
            } else {
                sb.append(first.ch);
                first.count--;
                if (first.count > 0) {
                    maxHeap.offer(first);
                }
            }
        }
        return sb.toString();
    }

    static class Letter {

        char ch;
        int count;

        Letter(char ch, int count) {
            this.ch = ch;
            this.count = count;
        }
    }

    public static void main(String[] args) {
        LogestHappyString lhs = new LogestHappyString();
        String res = lhs.longestDiverseString(1, 1, 7);
        System.out.println(res);
    }
}
