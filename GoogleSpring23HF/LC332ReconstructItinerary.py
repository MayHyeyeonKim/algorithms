# 힙큐는 그냥 큐인데 최소 힙으로 구현된 큐
# heapq.heappush(flight_map[departure], arrival)은 flight_map[departure]에 arrival를 넣는다는 말
from collections import deque, defaultdict

class Solution:
    def findItinerary(self, tickets):
        # Create a graph for each airport and keep list of airport reachable from it
        # tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
        graph = defaultdict(list)
        print(sorted(tickets))
        for src, dst in sorted(tickets)[::-1]:
            graph[src].append(dst)
        print(graph)
        route, stack = deque(), ['JFK']
        while stack:
            print("stack", stack)
            while graph[stack[-1]]:
                print("stack: graph", stack[-1], graph[stack[-1]])
                stack.append(graph[stack[-1]].pop())
            route.appendleft(stack.pop())
            print("route", route)

        return route

s = Solution()
s.findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])