var reverseWords = function(s) {
    reverse(s, 0, s.length-1)
    console.log(s)
    let start = 0
    for (let end = 0; end <= s.length; end++) {
        if (end === s.length || s[end] === ' ') {
            reverse(s, start, end - 1);
            start = end + 1;
        }
    }
};

function reverse(s, left, right){
    while(left < right){
        [s[left],s[right]] = [s[right],s[left]];
        left++
        right--
    }
}

const s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
result = reverseWords(s)
console.log(result)