((num) => {
  for (let i = 1; i <= num; i++) {
    // check for 15
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    }
    // check for 3
    else if (i % 3 === 0) {
      console.log("fizz");
    }
    // check for 5
    else if (i % 5 === 0) {
      console.log("buzz");
    } else console.log(i);
  }
})(15);
