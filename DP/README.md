## Dynamic Programming Conditions

Dynamic Programming (DP) is a problem-solving technique that can be applied to various computational problems. To effectively use DP, certain conditions must be met:

1. **Optimal Substructure:** The problem should exhibit optimal substructure, meaning that the optimal solution to a larger problem can be constructed from the optimal solutions of its subproblems. This property allows us to break down a complex problem into smaller, manageable subproblems.

2. **Overlapping Subproblems:** Overlapping subproblems occur when the same subproblem is encountered and computed multiple times. DP takes advantage of this by storing the results of previously solved subproblems and reusing them, which significantly reduces redundant computations.

3. **Memoization or Bottom-Up Approach:** DP can be implemented using either memoization (top-down approach) or a bottom-up approach. Memoization involves recursively solving subproblems and caching their results for future use. The bottom-up approach starts from the smallest subproblems and iteratively builds solutions for larger problems.

4. **Recurrence Relation Using Optimal Substructure:** To apply DP, it's crucial to define a recurrence relation that expresses how the optimal solution of the current problem relates to the optimal solutions of its smaller subproblems. This recurrence relation forms the core of the DP algorithm.

By meeting these conditions, DP algorithms can efficiently solve complex problems by breaking them down into simpler components and reusing computed results. DP is widely used in various fields, including computer science, mathematics, and optimization.

동적 프로그래밍(DP)의 조건 중 하나가 만족되는 문제 중에서 적용 가능한 조건이 하나라도 충족된다면 해당 문제에 동적 프로그래밍을 적용할 수 있다.
따라서 주어진 문제가 최적 부분 구조, 중복 부분 문제, 또는 메모이제이션 또는 바텀-업 접근 중 하나를 만족한다면, 해당 문제에 동적 프로그래밍을 적용할 수 있다.

# LeetCode Dynamic Programming (DP) Problems

1. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
2. [Coin Change](https://leetcode.com/problems/coin-change/)
3. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
4. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
5. [House Robber](https://leetcode.com/problems/house-robber/)
6. [Unique Paths](https://leetcode.com/problems/unique-paths/)
7. [Edit Distance](https://leetcode.com/problems/edit-distance/)
8. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
9. [Word Break](https://leetcode.com/problems/word-break/)
10. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
11. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
12. [Decode Ways](https://leetcode.com/problems/decode-ways/)
13. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
14. [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
15. [Coin Change 2](https://leetcode.com/problems/coin-change-2/)
16. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
17. [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)
18. [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)
19. [Word Break II](https://leetcode.com/problems/word-break-ii/)
20. [Perfect Squares](https://leetcode.com/problems/perfect-squares/)
21. [Jump Game](https://leetcode.com/problems/jump-game/)
22. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
23. [House Robber II](https://leetcode.com/problems/house-robber-ii/)
24. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
25. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
26. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
27. [Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)
28. [Minimum Swaps to Make Sequences Increasing](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/)
29. [Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/)
30. [Interleaving String](https://leetcode.com/problems/interleaving-string/)
