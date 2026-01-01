// 1700. Number of Students Unable to Eat Lunch

function countStudents(students, sandwiches) {
  let queue = [...students];
  let stack = [...sandwiches];
  let attempts = 0;

  while (queue.length && attempts < queue.length) {
    if (queue[0] === stack[0]) {
      queue.shift();
      stack.shift();
      attempts = 0;
    } else {
      queue.push(queue.shift());
      attempts++;
    }
  }

  return queue.length;
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
