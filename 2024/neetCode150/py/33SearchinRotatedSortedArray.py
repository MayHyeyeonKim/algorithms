class Solution:
    def search(self, nums, target):
        left, right = 0, len(nums)-1

        while left <= right :
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            
            if nums[left] <= nums[mid]: #[0,1,2,3,4] 1
                if nums[left] <= target < nums[mid]: 
                    right = mid -1
                else:
                    left = mid + 1
                
            else: #[5,1,3] 3
                if nums[mid] < target <= nums[right]: 
                    right = mid -1
                else:
                    left = mid + 1
        return -1

def main():
    nums = [4,5,6,7,0,1,2]
    target = 0
    sol = Solution()
    res = sol.search(nums, target)
    print(res)

if __name__ == "__main__":
    main()