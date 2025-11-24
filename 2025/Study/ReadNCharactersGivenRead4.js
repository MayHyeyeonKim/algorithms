// 157. Read N Characters Given Read4

// function readNCharactersGivenRead4(read4) {
//   /**
//    * @param {character[]} buf Destination buffer
//    * @param {number} n Number of characters to read
//    * @return {number} The number of actual characters read
//    */
//   return function (buf, n) {
//     let total = 0;
//     const temp = new Array(4);

//     while (total < n) {
//       const count = read4(temp);

//       if (count === 0) break;

//       const toCopy = Math.min(count, n - total);

//       for (let i = 0; i < toCopy; i++) {
//         buf[total] = temp[i];
//         total++;
//       }
//     }
//     return total;
//   };
// }

// ----------------------------
// 1) 가짜 파일과 read4 구현
// ----------------------------
let file = "abc"; // 테스트용 파일 내용
let filePtr = 0; // 파일 커서 (read4가 어디까지 읽었는지)

function read4(buf4) {
  let count = 0;

  while (count < 4 && filePtr < file.length) {
    buf4[count] = file[filePtr];
    count++;
    filePtr++;
  }

  return count; // 실제 읽은 글자 수
}

// -------------------------------------------
// 2) 만든 readNCharactersGivenRead4 함수
// -------------------------------------------
function readNCharactersGivenRead4(read4) {
  return function (buf, n) {
    let total = 0;
    const temp = new Array(4);

    while (total < n) {
      const count = read4(temp);
      if (count === 0) break;

      const toCopy = Math.min(count, n - total);

      for (let i = 0; i < toCopy; i++) {
        buf[total] = temp[i];
        total++;
      }
    }

    return total;
  };
}

// ----------------------------
// 3) 테스트 실행
// ----------------------------

// read() 함수 생성
const read = readNCharactersGivenRead4(read4);

// buf는 결과 저장 배열
const buf = [];

// n = 4 읽고 싶다
const result = read(buf, 4);

console.log("buf:", buf); // ['a','b','c']
console.log("result:", result); // 3
