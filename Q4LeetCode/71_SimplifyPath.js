//  71. Simplify Path

const SimplifyPath = (path) => {
  const parts = path.split("/");
  const stack = [];

  for (const part of parts) {
    if (part === "" || part === ".") continue;
    if (part === "..") {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(part);
    }
  }
  return "/" + stack.join("/");
};

console.log(SimplifyPath("/home/")); // Output: "/home"
console.log(SimplifyPath("/../")); // Output: "/"
console.log(SimplifyPath("/home//foo/")); // Output: "/home/foo"
console.log(SimplifyPath("/a/./b/../../c/")); // Output: "/c"
