from itertools import combinations

height = [int(input()) for _ in range(9)]
for combi in combinations(height, 7):
    if sum(combi) == 100:
        for height in sorted(combi):
            print(height, end=" ")
        break