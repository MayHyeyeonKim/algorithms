class Solution:
    import heapq

    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        # lis = []
        # for i in range(len(mat)):
        #     count = 0
        #     for j in range(len(mat[0])):
        #         if mat[i][j] == 0:
        #             break
        #         else:
        #             count += 1
        #     heapq.heappush(lis, [count, i])
        # final = []
        # while k:
        #     a = heapq.heappop(lis)
        #     final.append(a[1])
        #     k -= 1
        # return final

        tmp = []
        for i, m in enumerate(mat):
            cand = (sum(m), i)
            tmp.append(cand)
        tmp.sort()
        return [i[1] for i in tmp[:k]]
