// 295. Find Median from Data Stream

import java.util.Collections;
import java.util.PriorityQueue;

public class findMedianfromDataStream {
    private PriorityQueue<Integer> maxHeap;
    private PriorityQueue<Integer> minHeap;

    public findMedianfromDataStream() {
        maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        minHeap = new PriorityQueue<>();
    }

    public void addNum(int num) {
        // 먼저 maxH에 넣어주고
        maxHeap.offer(num);
        // maxH의 최대값이 minH의 최소값보다 크면 이동
        minHeap.offer(maxHeap.poll());
        // maxHeap이 더 많아야 하니까 다시 rebalance
        if (maxHeap.size() < minHeap.size()) {
            maxHeap.offer(minHeap.poll());
        }
    }

    public double findMedian() { // 더블은 소수점 표현가능 숫자타입
        if (maxHeap.size() == minHeap.size()) {
            return (maxHeap.peek() + minHeap.peek()) / 2.0;
        } else {
            return maxHeap.peek();
        }
    }

    public static void main(String[] args) {
        findMedianfromDataStream mf = new findMedianfromDataStream();

        mf.addNum(1);
        mf.addNum(2);
        System.out.println("Median: " + mf.findMedian());

        mf.addNum(3);
        System.out.println("Median: " + mf.findMedian());
    }
}
