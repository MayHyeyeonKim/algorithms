"""
color = 2
1. initialize the starting point  = (sr, sc) (1,1)
2. if images[sr][sc] == color:
    return image
    change the starting point color -> dfs

    def dfs(image,sr,sc,color,starting):
    if  0 > sr or sr >= len(image) or 0 > sc or sc >= len(image[0]) or image[sr][sc] != starting:
        return
    image[sr][sc] = color
    dfs sr + 1 
    dfs sr - 1
    dfs sc + 1
    dfs sc - 1

[1,1,1], [2,2,2],
[1,1,0], [2,2,0],
[1,0,1]  [2,0,1]

time complexity = O(mn)
space complexity = O(mn)
"""
