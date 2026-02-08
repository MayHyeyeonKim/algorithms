// 190. Reverse Bits

function reverseBits(n) {
  let binary = n.toString(2).padStart(32, "0");
  let reversed = binary.split("").reverse().join("");
  return parseInt(reversed, 2);
}

console.log(reverseBits(43261596)); // 964176192
// 설명: 00000010100101000001111010011100 -> 00111001011110000010100101000000
