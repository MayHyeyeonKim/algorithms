class Solution:
    def findDifference(self, nums1, nums2):
        return [set(nums1) - set(nums2), set(nums2) - set(nums1)]


# T.C : O(n) / S.C : O(n)
