let combinationSum = function (candidates, target) {
  let result = [];
  function dfs(depth, sum, arr) {
    if (sum === target) return result.push(arr);
    if (depth === candidates.length) return;
    while (sum <= target) {
      dfs(depth + 1, sum, [...arr]);
      arr.push(candidates[depth]);
      sum += candidates[depth];
    }
  }
  dfs(0, 0, []);
  console.log(result);
  return result;
};
combinationSum([2, 3, 6, 7], 7);
