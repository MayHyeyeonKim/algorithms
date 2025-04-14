function Queue() {
  q = [];

  return {
    enqueue(item) {
      queue.push(item);
    },

    dequeue() {
      return q.shift();
    },

    front() {
      return queue[0];
    },

    isEmpty() {
      return q.length === 0;
    },

    size() {
      return q.length;
    },
  };
}
