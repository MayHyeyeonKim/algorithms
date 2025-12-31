// 496. Next Greater Element I

/**
function nextGreaterElement(nums1, nums2) {
    const stack = []
    const map = new Map()

    for(const num of nums2){
        while(stack.length && stack[stack.length-1]< num){
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }

    while(stack.length){
        map.set(stack.pop(),-1)
    }

    return nums1.map(num => map.get(num));
};
 */
