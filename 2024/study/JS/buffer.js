const buffer = Buffer.from("안녕");
console.log("from(): ", buffer);
console.log("length: ", buffer.length);
console.log("toString(): ", buffer.toString());

const array = [
    Buffer.from("히히하호호 "),
    Buffer.from("hello world "),
    Buffer.from("rabbit"),
];
const buffer2 = Buffer.concat(array);
console.log("concat(): ", buffer2.toString());

const buffer3 = Buffer.alloc(3);
console.log("alloc(): ", buffer3);
