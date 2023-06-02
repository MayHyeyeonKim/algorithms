J = "aA"
S = "aAAbbbb"

freqs = {}

for char in S:
    if char not in freqs:
        freqs[char] = 1
    else:
        freqs[char] += 1

print(freqs)
