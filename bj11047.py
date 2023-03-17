N, K = map(int, input().split())
coins = [int(input()) for _ in range(N)]
coins.reverse()
# print(coins)
output = 0
for coin in coins:
    output += K // coin
    K %= coin
    # print(f'coin: {coin}, K: {K}, output: {output}')

print(output)
