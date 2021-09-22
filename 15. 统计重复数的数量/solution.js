/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    let count = 0, pre, flag = false;
    nums.sort((a, b) => (a-b));
    pre = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] == pre && (flag = true);
        nums[i] != pre && (pre = nums[i]);
        if(nums[i] != pre && flag) {
            ++count;
            flag = false;
        }
    }
    return count;
};