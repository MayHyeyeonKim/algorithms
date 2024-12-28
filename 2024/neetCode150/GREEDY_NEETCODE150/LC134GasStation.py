class Solution:
    def canCompleteCircuit(self, gas, cost):
        if sum(gas) < sum(cost):
            return -1
        
        total = 0
        res = 0
        for i in range(len(gas)):
            total += (gas[i] - cost[i]) # 현재 주유소에서 다음 주유소로 이동할 때의 남는 기름 양

            if total < 0:
                total = 0
                res = i + 1

        return res

gas = [1,2,3,4,5]
cost = [3,4,5,1,2]

sol = Solution()
result = sol.canCompleteCircuit(gas, cost)
print(result)

#이게 왜 그리디?