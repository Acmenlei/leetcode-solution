var singleNumber = function (nums) {
  let ret = [];
  for (let i in nums) {
    let index = ret.indexOf(nums[i]);
    if (index == -1) {
      ret.push(nums[i]);
    } else {
      ret.splice(index, 1);
    }
  }
  return ret[0];
};

singleNumber([2, 2, 1]);
