// 359. Logger Rate Limiter

import java.util.*;

public class LoggerRateLimiter {

    private Map<String, Integer> map;

    public Logger(){
        map = new HashMap<>();
    }

    public boolean shouldPrintMessage(int timestamp, String message) {
        // logic here!
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