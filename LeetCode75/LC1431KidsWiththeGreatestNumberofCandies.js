var kidsWithCandies = function(candies, extraCandies) {
    let highest = candies[0];
    let array = [];
    for(let i=1; i<candies.length; i++){
        if(highest < candies[i]){
            highest = candies[i]
        }
    }

    for(let i=0; i<candies.length; i++){
        if(candies[i] + extraCandies >= highest){
            array.push(true)
        }
        else{
            array.push(false)
        }
    }
    return array
};

candies = [2,3,5,1,3]
extraCandies = 3

console.log(kidsWithCandies(candies, extraCandies))