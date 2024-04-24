MOD = 10**9 + 7
def calculateWays(wordLen, maxVowels):
    C = 21
    V = 5
    dp = [[0] * (maxVowels + 1) for _ in range(wordLen + 1)]
    
    for i in range(maxVowels + 1):
        dp[0][i] = 1

    for i in range(1, wordLen + 1):
        for j in range(maxVowels + 1):
            dp[i][j] += dp[i - 1][maxVowels] * C % MOD
            if j > 0:
                dp[i][j] += dp[i - 1][j - 1] * V % MOD
            dp[i][j] %= MOD
    return dp[wordLen][maxVowels]
            

# if __name__ == '__main__':

#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     wordLen = int(input().strip())

#     maxVowels = int(input().strip())

#     result = calculateWays(wordLen, maxVowels)

#     fptr.write(str(result) + '\n')

#     fptr.close()
