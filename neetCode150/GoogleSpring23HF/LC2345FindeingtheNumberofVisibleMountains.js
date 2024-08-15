/**
 * @param {number[][]} peaks
 * @return {number}
 */
var visibleMountains = function(peaks) {
    if(peaks.length <= 1) return peaks.length;
    let bases = peaks.map((p) => [p[0] - p[1], p[0] + p[1]]).sort((a,b) => a[0]-b[0]);
    let repeated = 0;
    let stack = [];
    let pre_start = 0;
    let pre_end = 0;
    for(let i = 0; i < bases.length; i++) {
        let [st,en] = bases[i];
        if(stack.length && stack[stack.length-1][0] === st && stack[stack.length-1][1] === en) {
            if (!(pre_start === st && pre_end === en))
                repeated++;
            pre_start = st;
            pre_end = en;
        }
        // removing mountains which are not visible
        while(stack.length && stack[stack.length-1][0] >= st && stack[stack.length-1][1] <= en)
        stack.pop();
        // mountains whose peak cant be hidden, skip them
        if(stack.length && stack[stack.length-1][0] <= st && stack[stack.length-1][1] >= en) continue;
        // otherwise push
        stack.push(bases[i]);
        // console.log(stack);
    }
    return Math.max(stack.length - repeated, 0);
};
