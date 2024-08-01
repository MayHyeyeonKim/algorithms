function isAnagram(s, t) {
    const sDic = {};
    const tDic = {};

    for (let c of s) {
        if (sDic[c]) {
            sDic[c]++;
        } else {
            sDic[c] = 1;
        }
    }

    for (let c of t) {
        if (tDic[c]) {
            tDic[c]++;
        } else {
            tDic[c] = 1;
        }
    }

    for (let key in sDic) {
        if (sDic[key] !== tDic[key]) {
            return false;
        }
    }

    for (let key in tDic) {
        if (tDic[key] !== sDic[key]) {
            return false;
        }
    }

    return true;
}

// Example usage:
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
