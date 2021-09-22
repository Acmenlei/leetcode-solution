const strs = ["abcdjhj", "abckj", "abcjhfl"];
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) return strs[0];
  if (strs[0] == "") return "";
  let flag = true,
    r = "",
    k = 0;
  while (flag && k < strs[0].length) {
    let cpa = strs[0][k];
    for (let i = 1; i < strs.length; i++) {
      if (cpa != strs[i][k]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      r += cpa;
      k++;
    }
  }
  return r;
};
console.log(longestCommonPrefix(strs));
