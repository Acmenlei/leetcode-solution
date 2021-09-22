/* 一趟快排思路 */
var exchange = function (nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    while (left < right && nums[left] % 2 != 0) left++;
    while (left < right && nums[right] % 2 != 1) right--;
    if (left < right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }
  }
  return nums;
};
