var partitionString = function(s){
    let count = 1
    let seen = new Set()

    for(let char of s){
        if(seen.has(char)){
            count += 1
            seen.clear();
        }
        seen.add(char)
    }
    return count
}

console.log(partitionString("abacaba"))
