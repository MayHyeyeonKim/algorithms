/**
백트래킹은 길 찾기 게임 같은 거야!
어떤 문제가 있으면, 가능한 모든 길을 찾아보면서 정답인 길을 찾는 방법이야.
하지만 모든 길을 무조건 끝까지 가는 게 아니고,
"이 길은 아닌 것 같아!" 하면 바로 돌아서 다른 길을 찾아가는 똑똑한 방법이야.
 */

var combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(currentCombination, remainingTarget, startIndex) {
    if (remainingTarget === 0) {
      result.push([...currentCombination]);
      return;
    }

    if (remainingTarget < 0) return;

    for (let i = startIndex; i < candidates.length; i++) {
      currentCombination.push(candidates[i]);
      backtrack(currentCombination, remainingTarget - candidates[i], i);
      currentCombination.pop();
    }
  }
  backtrack([], target, 0);
  return result;
};

console.log(combinationSum([1, 2, 3], 5));
