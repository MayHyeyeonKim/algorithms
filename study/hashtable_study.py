J = "aA"
S = "aAAbbbb"

freqs = {}

for char in S:
    if char not in freqs:
        freqs[char] = 1
    else:
        freqs[char] += 1

count = 0
for char in J:
    if char in freqs:
        count += freqs[char]

print(freqs)
print(count)
