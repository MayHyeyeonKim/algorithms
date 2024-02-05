class Solution:
    def countBits(self, n: int):
        bits = [0] * (n + 1)  # Initialize the bits array with zeros

        for i in range(1, n + 1):
            bits[i] = bits[i >> 1] + (i & 1)

        return bits
