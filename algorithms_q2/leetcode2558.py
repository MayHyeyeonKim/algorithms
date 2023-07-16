import math


class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        i = 0
        while i < k:
            gifts = sorted(gifts)
            sqrt = math.floor(math.sqrt(gifts[-1]))
            gifts[-1] = sqrt
            i += 1
        return sum(gifts)


# 너는 gifts라는 정수 어레이가 주어졌다
# 다양한 파일안에 gifts의 수가 denoting이다.
# 매 순간, 너는 아래의 것을 따라라.
# - 한 파일을 선택하라 gifts의 최대수를
# - 만약에 최대수를 가진 gifts와 함께 한개의 파일보다 더 있다면, 아무거나 선택해라. (즉 가장 큰 gifts의 숫자가 같다면,)
# - 최대수를 가진 gifts의 제곱근의 바닥아래 둬라. 나머지 gifts를 취하라.
# k초 후에 남아있는 선물의 숫자를 반환해라.

# gifts = [25, 64, 9, 4, 100], k=4
# k동안 이걸 반복해야하니까 4번 돌아본다.
# 100이 제일 크다 -> [25, 64, 9, 4, 10]
# 64가 제일 크다 -> [25, 8, 9, 4, 10]
# 25가 제일 크다 -> [5, 8, 9, 4, 10]
# 10이 제일 크다 -> [5, 8, 9, 4, 3.333] 3.333이지만 정수로 반환한다.
# 총 4번 돌았다.

# i가 4가 될 동안, (0부터 시작하니까 3까지돌면된다.)
#     정렬된_gifts = 오름차순 정렬한다.
#     제곱근 = 정렬된_gifts의 제일 마지막을 제곱근으로 팍 줄인다.
#     i += 1
# return 정렬된_gifts의 합
