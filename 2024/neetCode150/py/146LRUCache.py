from collections import OrderedDict
class LRUCache:

    #TC: O(1), SC: O(n) n = capacity
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    #TC: O(1), SC:O(1)
    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key) #is moved to the right end if last is true (the default)
        return self.cache[key]

    #TC: O(1), SC: O(n) capacity이내로 유지될텐데 그럼 n개의 공간? OrderedDict의 크기 변화에 기반한 작업만 하니 O(1)인가?   
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)
            # last=False는 오래된 항목부터(제일왼쪽 끝) 제거한다는 의미 (큐처럼)
            # last=True가 기본값, LIFO order if last is true or FIFO order if false.


lrucache = LRUCache(2) 

# put 연산
lrucache.put(1, 1)  # 캐시에 (1, 1) 추가
lrucache.put(2, 2)  # 캐시에 (2, 2) 추가

# get 연산
print(lrucache.get(1))  # 1 출력 (키 1에 해당하는 값)

# 캐시 용량 초과로 가장 오래된 항목 제거
lrucache.put(3, 3)  # 캐시에 (3, 3) 추가, (2, 2) 제거

# 제거된 항목에 대한 get 연산
print(lrucache.get(1))  # 1 출력 (키 2이 캐시에서 제거됨)

# 캐시에 존재하는 항목에 대한 get 연산
print(lrucache.get(2))  # -1 출력 (키 2에 해당하는 값 없음)
