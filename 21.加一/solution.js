/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length - 1;
  while (digits[len] && digits[len] + 1 == 10) {
    digits[len] = 0;
    --len;
  }
  digits[len] === undefined ? digits.unshift(1) : (digits[len] += 1);
  return digits;
};

console.log(plusOne([9, 9, 9, 9, 9, 8]));
