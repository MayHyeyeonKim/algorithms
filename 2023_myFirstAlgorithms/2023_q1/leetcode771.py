class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        freqs = {}

        for char in stones:
            if char not in freqs:
                freqs[char] = 1
            else:
                freqs[char] += 1

        count = 0
        for char in jewels:
            if char in freqs:
                count += freqs[char]

        return count


sol = Solution()
res = sol.numJewelsInStones("aAA", "adzzAAAddd")
print(res)
