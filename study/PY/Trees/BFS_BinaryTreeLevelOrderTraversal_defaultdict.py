from collections import defaultdict, deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root):
        dic = defaultdict(list)
        # dq = deque([[root, 0]]) if root else None
        # while dq:
        #     node, h = dq.popleft()
        #     dic[h].append(node.val)
        #     if node.left:
        #         dq.append([node.left, h + 1])
        #     if node.right:
        #         dq.append([node.right, h + 1])
        # # res = [[] for i in range(len(dic))]
        # # for k, v in dic.items():
        # #     res[k] = v
        
        def dfs(node, level):
            if not node: 
                return
            dic[level].append(node.val)
            dfs(node.left, level+1)
            dfs(node.right, level+1)
        dfs(root,0)
        return list(dic.values())

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

sol = Solution()
result = sol.levelOrder(root)
print(result)

# dic = defaultdict(list)
# # defaultdict는 존재하지 않는 키에 대해 빈 리스트 []를 기본 값으로 사용합니다. 여기서 list는 리스트를 생성하는 함수를 참조합니다. 새 키에 대해 접근할 때마다 list()가 호출되어 새로운 빈 리스트가 생성됩니다.

# dic = defaultdict()
# # defaultdict는 기본적으로 None을 기본 값으로 사용합니다. 즉, 존재하지 않는 키에 대해 접근하면 None이 반환됩니다. 이는 defaultdict의 기본 동작이며, 특정한 기본 값을 제공하지 않았을 때의 동작입니다.

# dic = defaultdict([])
# # 오류를 발생시킵니다. defaultdict의 첫 번째 인자는 반드시 호출 가능한 객체(예: 함수)여야 하는데, []는 호출 가능한 객체가 아닙니다. 따라서 이 코드는 TypeError를 발생시킬 것입니다.

# dic = defaultdict(list())
# # 작동하지 않는 코드입니다. defaultdict의 인자로는 호출 가능한 객체(예: 함수)가 필요한데, list()는 호출 결과인 빈 리스트를 나타냅니다. 따라서 list()는 호출 가능한 객체가 아니므로 TypeError를 발생시킬 것입니다.