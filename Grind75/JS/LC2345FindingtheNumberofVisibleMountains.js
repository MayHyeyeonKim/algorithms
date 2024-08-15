/**
 * @param {number[][]} peaks
 * @return {number}
 */
var visibleMountains = function(peaks) {
    // 산의 수가 1개 이하라면 그 산의 수를 그대로 반환
    if (peaks.length <= 1) return peaks.length;

    // 각 산의 시작점과 끝점을 계산한 후, 시작점 기준으로 정렬
    let bases = peaks.map((p) => [p[0] - p[1], p[0] + p[1]]).sort((a, b) => a[0] - b[0]);

    // 중복된 산의 수를 세기 위한 변수
    let repeated = 0;

    // 보이는 산을 추적하기 위한 스택
    let stack = [];

    // 각 산을 순회
    for (let i = 0; i < bases.length; i++) {
        let [st, en] = bases[i];

        // 현재 산이 이전 산과 동일한지 확인 (중복 확인)
        if (stack.length && stack[stack.length - 1][0] === st && stack[stack.length - 1][1] === en) {
            // repeated++;
            continue;
        }

        // 스택에 있는 산 중 현재 산에 의해 가려져서 보이지 않는 산을 제거
        while (stack.length && stack[stack.length - 1][0] >= st && stack[stack.length - 1][1] <= en)
            stack.pop();

        // 현재 산이 이미 스택에 있는 산에 의해 가려지는 경우 스킵
        if (stack.length && stack[stack.length - 1][0] <= st && stack[stack.length - 1][1] >= en) continue;

        // 그렇지 않은 경우 현재 산을 스택에 추가
        stack.push(bases[i]);
    }

    // 보이는 산의 수에서 중복된 산의 수를 빼고 반환, 0보다 작을 수 없으므로 최솟값은 0
    return Math.max(stack.length, 0);
    // return stack.length;
};