/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    return function(n) {
        let left = 1;
        let right = n;
        
        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid; // 첫 번째 잘못된 버전은 mid 또는 그 이전에 있음
            } else {
                left = mid + 1; // 첫 번째 잘못된 버전은 mid 이후에 있음
            }
        }
        
        return left; // left가 첫 번째 잘못된 버전
    };
};
