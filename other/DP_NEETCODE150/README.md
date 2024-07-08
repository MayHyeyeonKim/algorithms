### 다이나믹 프로그래밍(Dynamic Programming)

#### 개요
이 프로젝트는 다이나믹 프로그래밍(Dynamic Programming, DP)을 사용하여 복잡한 문제를 해결하는 데 목적이 있습니다. DP는 문제를 더 작은 하위 문제로 나누고, 하위 문제의 결과를 저장하여 반복 계산을 피함으로써 최적화 문제를 효율적으로 해결합니다.

#### 다이나믹 프로그래밍(DP)

- **정의**: DP는 복잡한 문제를 더 작은 하위 문제들로 나누고, 이 하위 문제들의 결과를 저장하여 동일한 하위 문제를 반복적으로 계산하지 않도록 하는 알고리즘 기법입니다.
- **목적**: 주로 최적화 문제에서 사용되며, 중복된 계산을 줄여 효율성을 높이는 데 그 목적이 있습니다.

#### 문제 해결 방법

1. **DP 테이블 정의**: DP 테이블(배열 등)을 정의하고, 각 상태를 정의합니다. (Define a DP table (array, etc.) and the states (subproblems) that will be used.)
2. **점화식 정의**: 상태 간의 관계를 정의하여 점화식을 만듭니다. (Define Recurrence Relation: F(n) = F(n-1) + F(n-2).)

#### 참고 자료

- **개취**: [수많은 경우의 수가 많아서 수행시간 단축](https://www.youtube.com/watch?v=0bqfTzpWySY&t=125s)
- **동빈나**: [DP는 하나의 문제를 단 한번만 풀기](https://www.youtube.com/watch?v=FmXZG7D8nS4)
- **코드없는 프로그래밍**: [섭프로그램이 겹칠 때 메모이제이션, 피보나치, 처음 한번만 계산하고 저장](https://www.youtube.com/watch?v=eJC2oetXaNk)


#### 1-D Dynamic Programming Problems

- [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) - Easy - 20240606
- [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/) - Easy - 20240607
- [House Robber](https://leetcode.com/problems/house-robber/) - Medium - 20240610
- [House Robber II](https://leetcode.com/problems/house-robber-ii/) - Medium - 20240611
- [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) - Medium - 20240612
- [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) - Medium - 20240613
- [Decode Ways](https://leetcode.com/problems/decode-ways/) - Medium - 20240614
- [Coin Change](https://leetcode.com/problems/coin-change/) - Medium - 20240617
- [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) - Medium - 20240618
- [Word Break](https://leetcode.com/problems/word-break/) - Medium
- [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) - Medium
- [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) - Medium

#### 2-D Dynamic Programming Problems

- [Unique Paths](https://leetcode.com/problems/unique-paths/) - Medium
- [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) - Medium - 20240701
- [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) - Medium - 20240702
- [Coin Change II](https://leetcode.com/problems/coin-change-ii/) - Medium - 20240703
- [Target Sum](https://leetcode.com/problems/target-sum/) - Medium - 20240705
- [Interleaving String](https://leetcode.com/problems/interleaving-string/) - Medium
- [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) - Hard
- [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) - Hard
- [Edit Distance](https://leetcode.com/problems/edit-distance/) - Medium
- [Burst Balloons](https://leetcode.com/problems/burst-balloons/) - Hard
- [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) - Hard
