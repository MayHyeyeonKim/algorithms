from collections import defaultdict, deque
import collections
class Solution:
    def canFinish(self, numCourses, prerequisites):
        prereq_dic = collections.defaultdict(list) #{1: [0], 2: [0], 3: [1], 4: [1, 3]} key는 val을 듣기위한 선행과목
        prereq_num = [0] * numCourses #[2, 2, 0, 1, 0] index를 수강하려면 ele만큼의 선행과목을 수강해야한다

        for cur, pre in prerequisites: #prerequisites = [ [0,1], [0,2], [1,3], [1,4], [3,4]]에서 [0는 cur,1는 pre]
            prereq_dic[pre].append(cur)
            prereq_num[cur] += 1

        deq = deque()

        for c,n in enumerate(prereq_num): #c는 index
            if n == 0:
                deq.append(c)

        cnt = 0 #수강완료
        while deq: #[2,4]
            c = deq.popleft()
            cnt += 1

            for next_c in prereq_dic[c]:
                prereq_num[next_c] -= 1
                if prereq_num[next_c] == 0:
                    deq.append(next_c)

        return cnt == numCourses

numCourses = 5
prerequisites = [ [0,1], [0,2], [1,3], [1,4], [3,4]]
sol = Solution()
result = sol.canFinish(numCourses, prerequisites)
print(result)

# class Solution:
#     def canFinish(self, numCourses, prerequisites):
#         dic = defaultdict(list) # 1 : [0,4]
#         topology = [0] * numCourses
#         for p1, p2 in prerequisites:
#             topology[p2] += 1
#             dic[p1].append(p2)

#         dq = deque()
#         for i, t in enumerate(topology):
#             if t == 0:
#                 dq.append(i)

#         visited = set()
#         while dq:
#             cur = dq.popleft()
#             visited.add(cur)
#             for val in dic[cur]:
#                 topology[val] -= 1
#                 if topology[val] == 0:
#                     dq.append(val)

#         return True if len(visited) == numCourses else False