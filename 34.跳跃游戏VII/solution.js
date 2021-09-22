var canReach = function (s, minJump, maxJump) {
  let indexs = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "0") {
      indexs.push(i);
    }
  }
  for (let i = 0; i < indexs.length; i++) {
    if (
      indexs[i] + minJump != indexs[i + 1] &&
      indexs[i] + maxJump != indexs[i + 1]
    ) {
      return false;
    }
  }
  return true;
};

console.log(canReach("011010", 2, 3));
