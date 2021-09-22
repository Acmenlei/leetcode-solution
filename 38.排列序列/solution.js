var getPermutation = function (n, k) {
  let result = "",
    count = 0, // 记录当前循环的次数
    used = [], // 记录当前的操作数哪些被使用了
    strs = "";
  let dfs = function (deep) {
    if (deep == n) {
      count++;
      if (count == k) {
        result = strs;
      }
      return;
    }
    for (let i = 1; i <= n && count < k; i++) {
      if (!used[i]) {
        strs += i;
        used[i] = true;
        dfs(deep + 1);
        strs = strs.substr(0, strs.length - 1);
        used[i] = false;
      }
    }
  };
  dfs(0);
  return result;
};
