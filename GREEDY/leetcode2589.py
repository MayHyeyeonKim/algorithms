# Minimum Time to Complete All Tasks


class Solution:
    def findMinTime(self, tasks):
        line = [0] * 10
        for i, (lo, hi, time) in enumerate(sorted(tasks, key=lambda x: x[1])):
            cnt = sum(line[x] for x in range(lo, hi + 1))
            time = max(0, time - cnt)
            for x in range(hi, lo - 1, -1):
                if time and not line[x]:
                    line[x] = 1
                    time -= 1
        return sum(line)


sol = Solution()
tasks1 = [[1, 3, 2], [2, 5, 3], [5, 6, 2]]
ans = sol.findMinTime(tasks1)
print(ans)
