/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let highest = Math.max(...candies)
    let array = []

    for(const candy of candies){
        if(candy+ extraCandies >= highest){
            array.push(true)
        }
        else{array.push(false)}
    }

    return array
};