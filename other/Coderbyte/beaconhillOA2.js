/**
 * String Challenge
 * 
 * Have the function StringChallenge(num) take the num parameter being passed and return the number of hours and minutes the parameter convers to.
 * Separate the number of hours and minutes with a colon.
 * 
 * Once your function is working, take the final ourput string and combine it with your ChallengeToken, both in reverse order and separated by a colon.
 * 
 * Input: 126
 * Output: 2:6
 */

const ChallengeToken = "fnfn1234";
function StringChallenge(num){
    const hour = String(Math.floor(num / 60));
    const min = String(num % 60);
    const reversedHour = [...hour, ":", ...min].reverse();

    const reversedToken = ChallengeToken.split("").reverse().join("");
    return [...reversedHour, ":", ...reversedToken].join("")
}

console.log(StringChallenge(126))