# a = []
# for n in range(1, 10 + 1):
#     if n % 2 == 1:
#         a.append(n * 2)
# print(a)

a = [n * 2 for n in range(1, 10 + 1) if n % 2 == 1]
print(a)
