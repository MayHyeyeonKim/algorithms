class Solution:
    def permute(self, nums):
        def backtrack(cur):
            if len(cur) == len(nums):
                ans.append(cur[:])
                return
            
            for num in nums:
                if num not in cur:
                    cur.append(num)
                    backtrack(cur)
                    cur.pop()
        
        ans = []
        backtrack([])
        return ans

sol = Solution()
result = sol.permute(nums=[1,2,3])
print(result)