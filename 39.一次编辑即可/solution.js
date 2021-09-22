var oneEditAway = function (first, second) {
  let len1 = first.length,
    len2 = second.length;
  if (Math.abs(len1 - len2) > 1) return false;
  let isContinue = true;
  for (let i = 0, j = 0; i < len1 && j < len2; ) {
    if (first[i++] != second[j++]) {
      if (!isContinue) return false;
      isContinue = false;
      if (len1 !== len2) len1 > len2 ? j-- : i--;
    }
  }
  return true;
};
