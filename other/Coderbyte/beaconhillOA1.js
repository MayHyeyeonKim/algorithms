/**
 * Strinf Challenge
 * 
 * Have the function StringChallenge(str)
 * Insert dashed("-") between each two odd numbers in str.
 * 
 * Once your function is working, take the final output string and combine it with your ChallengeToken, both in reverse order and separated by a colon.
 * Input: 99946
 * Output: 9-9-946
 * Final Output: 649-9-9:a1s4k3d2j
 */

const ChallengeToken = "j2d3k4s1a"

function StringChallenge(str){
    const strArr = [];

    // 99946이 있으면, 일단 이 스트링을 돌껀데 이 루프는 스트링끝에서-1까지만 돌것이다. 왜냐하면 i의 다음 요소도 살펴봐야하니까
    // 현재요소를 strArr에 넣고,
    // 만약 현재요소와 현재요소의 다음요소가 홀수이면 strArr에 "-"를 넣는다
    // 그리고 for loop이 끝나면 맨 마지막 요소는 이 루프를 돌면서 strArr.push를 못하니까 이 루프 밖에서 명시적으로 넣어준다.
    // strArr를 까꾸로 뒤집기
    for(let i=0; i<str.length-1; i++){
        const firstNum = Number(str[i])
        const secondNum = Number(str[i+1])
        strArr.push(firstNum)
        if(firstNum % 2 === 1 && secondNum % 2 === 1){
            strArr.push("-")
        }
    }
    // 루프가 끝나면 맨 마지막 요소도 넣어주기
    strArr.push(str[str.length-1]);
    // 다 넣었으면 strArr를 뒤집어 주기
    strArr.reverse();

    // 토큰도 뒤
    const reversedToken = ChallengeToken.split("").reverse().join("")
    return [...strArr, ":",...reversedToken].join("");
}

// result = ChallengeToken.split("")
// console.log(result)
console.log(StringChallenge("99946"))