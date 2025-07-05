// 359. Logger Rate Limiter

import java.util.*;

public class LoggerRateLimiter {

    private Map<String, Integer> map;

    public LoggerRateLimiter() {
        map = new HashMap<>();
    }

    public boolean shouldPrintMessage(int timestamp, String message) {
        // logic here!

        if (!map.containsKey(message)) {
            map.put(message, timestamp);
            return true;
        }
        int lastTimestamp = map.get(message);
        if (timestamp >= lastTimestamp + 10) {
            map.put(message, timestamp);
            return true;
        } else {
            return false;
        }
    }

    public static void main(String args[]) {
        LoggerRateLimiter logger = new LoggerRateLimiter();

        System.out.println(logger.shouldPrintMessage(1, "foo"));
        System.out.println(logger.shouldPrintMessage(2, "bar"));
        System.out.println(logger.shouldPrintMessage(3, "foo"));
        System.out.println(logger.shouldPrintMessage(8, "bar"));
        System.out.println(logger.shouldPrintMessage(10, "foo"));
        System.out.println(logger.shouldPrintMessage(11, "foo"));
    }
}