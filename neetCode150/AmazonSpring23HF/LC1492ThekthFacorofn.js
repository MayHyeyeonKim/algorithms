var kthFactor = function(n, k) {
    let divisors = [];
    for(let i=1; i<=n; i++){
        if(n%i === 0){
            divisors.push(i)
        }
    }
    if(divisors.length < k){
        return -1;
    }
    return divisors[k-1]
};

console.log(kthFactor(12,3))