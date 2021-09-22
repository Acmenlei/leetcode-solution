const arr = [1,3,5,6,8];
var searchInsert = function(nums, target) {
    let left = 0, right, middle;
    right = nums.length;
    while (right >= left) {
        middle = Math.floor((left + right) / 2);
        if(nums[middle] == target)
            return middle;
        else if(nums[middle] > target) {
        right = middle - 1;
        } else 
        left = middle + 1;
    }
    if(right == arr.length) {
        return right;
    }
    return right + 1;
};

console.log(searchInsert(arr, 4));