var removeDuplicates = function(nums) {
    let curr = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(curr == nums[i]) {
           nums.splice(i, 1);
           i--;
        } else {
            curr = nums[i];
        }
    }
};
let nums = [1,1,2];
removeDuplicates(nums);
console.log(nums);