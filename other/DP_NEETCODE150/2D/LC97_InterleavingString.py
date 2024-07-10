# Interleaving: the process of merging two or more sequences (or strings) by alternating their elements while maintaining the order of each sequence.
# 두 개 이상의 시퀀스(또는 문자열)의 요소들을 그 순서를 유지하면서 교차하여 새로운 시퀀스를 만드는 과정

def isInterleave(s1, s2, s3):
    m, n = len(s1), len(s2)
    if len(s3) != m + n:
        return False
    
    # DP 테이블 초기화
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    
    # DP 테이블 채우기
    for i in range(m + 1):
        for j in range(n + 1):
            if i > 0 and s1[i - 1] == s3[i + j - 1]:
                dp[i][j] = dp[i][j] or dp[i - 1][j]
            if j > 0 and s2[j - 1] == s3[i + j - 1]:
                dp[i][j] = dp[i][j] or dp[i][j - 1]
    
    return dp[m][n]

# 예시 테스트
s1 = "aabcc"
s2 = "dbbca"
s3 = "aadbbcbcac"
print(isInterleave(s1, s2, s3))  # Output: True

s1 = "aabcc"
s2 = "dbbca"
s3 = "aadbbcaccc"
print(isInterleave(s1, s2, s3))  # Output: False