#가장 큰 차이의 수를 반환

def maxDiff(px):
    if not px or len(px) <=1:
        return -1
    
    max_spread = -1
    min_p = px[0]
    for p in px:
        if p < min_p:
            min_p = p
        else:
            spread = p - min_p
            if spread > max_spread:
                max_spread = spread
    return max_spread if max_spread > 0 else -1

result = maxDiff([7,1,3,2])
print(result)