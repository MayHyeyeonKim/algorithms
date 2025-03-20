// 161. One Edit Distance

var isOneEditDistance = function(s, t) {
    /**
        - if the absolute diffrence in lengths is greater than 1, return false
        - if the lengths are equal, return false
        - if the lengths differ by one:
            - identify the longer and shorter string,
            - compare them character by character,
            - only one difference is allowed
     */

     const m = s.length, n = t.length
     if(Math.abs(m-n) > 1) return false

     if (m > n) return isOneEditDistance(t,s)

     for(let i=0; i < m; i++){
        if(s[i] !== t[i]){
            if(m===n){
                return s.slice(i+1) === t.slice(i+1)
            }else{
                return s.slice(i) === t.slice(i+1)
            }
        }
     }
     return m+1 ===n
};

let s = "ab"
let t = "acb"
let res = isOneEditDistance(s,t)
console.log(res)