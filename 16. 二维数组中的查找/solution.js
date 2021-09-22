/** 二分法
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix[0] == undefined) return false;
  let start = -1,
    len = matrix.length,
    innerLen = matrix[0].length;
  for (let i = 0; i < len; i++) {
    if (matrix[i][innerLen - 1] == target) {
      return true;
    }
    if (matrix[i][innerLen - 1] > target) {
      start = i;
      break;
    }
  }
  if (start == -1) {
    // 已经不存在，没必要往下找了
    return false;
  }
  for (; start < len; start++) {
    let left = 0,
      right = innerLen,
      middle;
    while (right >= left) {
      middle = Math.floor((left + right) / 2);
      if (matrix[start][middle] == target) return true;
      else if (matrix[start][middle] > target) right = middle - 1;
      else left = middle + 1;
    }
  }
  return false;
};
/* 矩阵遍历法 */
var findNumberIn2DArray2 = function (matrix, target) {
  if (matrix.length == 0) {
    return false;
  }
  let row = 0,
    column = matrix[row].length - 1;
  while (matrix[row] !== undefined && matrix[row][column] !== undefined) {
    if (matrix[row][column] == target) {
      return true;
    } else if (matrix[row][column] > target) --column;
    else ++row;
  }
  return false;
};
console.log(
  findNumberIn2DArray2(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    3
  )
);
