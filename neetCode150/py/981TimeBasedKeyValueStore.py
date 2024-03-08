import collections


class TimeMap:
    def __init__(self):
        self.meta = collections.defaultdict(list)
        self.data = collections.defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.meta[key].append(timestamp)
        self.data[key].append(value)

    def get(self, key: str, timestamp: int) -> str:
        timestamps = self.meta[key]
        values = self.data[key]
        idx = self.binary_search(timestamps, timestamp)
        if idx == -1:
            return ''
        return values[idx]

    def binary_search(self, timestamps, timestamp):
        left, right = 0, len(timestamps) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if timestamps[mid] <= timestamp:
                left = mid + 1
            else:
                right = mid - 1
        return right
