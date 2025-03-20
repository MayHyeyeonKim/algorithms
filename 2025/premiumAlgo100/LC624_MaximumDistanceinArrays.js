var maxDistance = function (arrays) {
  let min_value = arrays[0][0];
  let max_value = arrays[0][arrays[0].length - 1];
  // console.log(min_value, max_value)
  let max_distance = 0;

  for (let i = 1; i < arrays.length; i++) {
    let cur_min_value = arrays[i][0];
    let cur_max_value = arrays[i][arrays[i].length - 1];

    max_distance = Math.max(max_distance, Math.abs(cur_max_value - min_value));
    max_distance = Math.max(max_distance, Math.abs(max_value - cur_min_value));

    min_value = Math.min(min_value, cur_min_value);
    max_value = Math.max(max_value, cur_max_value);
  }
  return max_distance;
};

console.log(
  maxDistance([
    [1, 2, 3],
    [4, 5],
    [1, 2, 3],
  ])
);
