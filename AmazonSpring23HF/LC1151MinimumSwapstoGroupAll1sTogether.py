class Solution:
    def minSwaps(self, data: List[int]) -> int:
        windows = sum(data)
        res = windows
        l = 0
        t = 0
        for r in range(len(data)):
            t += data[r]
            if r - l + 1 == windows:
                res = min(res, windows-t)
                t -= data[l]
                l += 1
        return res
