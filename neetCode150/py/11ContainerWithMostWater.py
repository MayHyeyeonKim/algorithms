class Solution:
    def maxArea(self, height):
        """
                  0. 1. 2. 3. 4. 5. 6. 7. 8
        height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
                  s                       e
        
        area = (5-1)* min(height[s], height[e])
        max_area = 
        
        area: (e - s) * min(height[s], height[e])
        """
        max_area = 0
        start,end = 0, len(height) - 1
        while start < end :
            area = (end-start)*min(height[start],height[end])
            # max_area = max(area, max_area)
            max_area = area if area > max_area else max_area
            if height[start] < height[end]:
                start += 1
            else:
                end -= 1
        return max_area

height = [1,8,6,2,5,4,8,3,7]
solution = Solution()
result = solution.maxArea(height)
print(result)