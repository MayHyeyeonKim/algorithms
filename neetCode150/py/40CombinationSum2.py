def combinationSum2(candidates, target):
        ans = []
        def backtrack(i, comb, tot):
            if tot == target:
                ans.append(comb[:])
                return
            if i >= len(candidates) or tot > target:
                return
            for idx in range(i, len(candidates)):
                if idx > i and candidates[idx] == candidates[idx - 1]: #현재 인덱스 idx가 시작 인덱스 i보다 큰 경우에만 중복 체크 and 중복을 건너뛰고자,
                    continue
                comb.append(candidates[idx])
                backtrack(idx + 1, comb, tot + candidates[idx])
                comb.pop()
        candidates.sort()
        backtrack(0, [], 0)
        return ans

print(combinationSum2([2,5,2,1,2],5))