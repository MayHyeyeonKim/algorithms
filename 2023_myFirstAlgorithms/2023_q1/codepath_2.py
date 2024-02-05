#가장 큰 양수 스프레드 반환 (spread 주식 매매에 사용되는 용어, 한 종목의 매입가격과 매도가격사이 차이)

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

result = maxDiff([2,8,3,2])
print(result)