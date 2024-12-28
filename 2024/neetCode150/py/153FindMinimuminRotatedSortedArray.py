class Solution:
    def findMin(self, nums):
        res = nums[0]
        l,r = 0, len(nums)-1
        while l <= r:
            if nums[l] < nums[r]:
                res = min(res, nums[l])
                break
            m = l + (r - l) // 2
            res = min(res, nums[m])
            if nums[m] >= nums[l]:
                l = m + 1
            else:
                r = m - 1
        return res
    
def main():
    sol = Solution()
    nums = [3,4,5,1,2]
    result = sol.findMin(nums)
    print(result)

if __name__ == "__main__":
    main()

# tc O(logn) sc O(1)