#LC198_HouseRobber.py
def rob(nums):
    rob1, rob2 = 0,0 #1,1

    for n in nums:
        temp = max(n+rob1, rob2)
        rob1 = rob2
        rob2 = temp
    return rob2

houses = [2,1,1,3]
print(rob(houses))  # Output: 4

# TC: O(n) SC: O(1)