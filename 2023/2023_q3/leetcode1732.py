def largestAltitude(self, gain: List[int]) -> int:
    maxAltitude = 0
    curAltitude = 0
    for i in gain:
        curAltitude += i
        maxAltitude = max(maxAltitude, curAltitude)
    return maxAltitude


# T.C : O(n) / S.C : O(1)
