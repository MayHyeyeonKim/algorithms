/**
    [ approach 1 ] - 이렇게 하면 order checking이 안됨 ❌
    let count = 0
    t를 돌면서 s[i]가 있으면 count += 1
    t를 다 돌고 s.length와 count가 같으면 true, 아니면 false

    [ approach 2 ]
              i
    s = " a c b " 

                      j
    t = " a h b g d c"   

    let i = 0, j = 0
    j가 t의 끝까지 갈 동안 {
        만약 (s[i] === t[j]){
            i++
        } 다르면 j++
    }
    return i === s.length;

    이러면 두번째 어프로치는 tc o(n), sc는 o(1)
     */

var isSubSequence = function (s, t) {
  let i = 0,
    j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

s = "abc";
t = "ahbgdc";
console.log("isSubSequence는? ", isSubSequence(s, t));
