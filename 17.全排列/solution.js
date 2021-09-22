var dfsfunc = function (nums, len, stack, used, depth, dfs) {
    if (depth == len) {
        dfs.push([...stack]);
        return;
    }
    for (let i = 0; i < len; i++) {
        if( used[i] ) { continue; }
        stack.push(nums[i]);
        used[i] = true;
        dfsfunc(nums, len, stack, used, depth + 1, dfs);
        stack.pop();
        used[i] = false;
    }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let dfs = [], len = nums.length, stack = [], used = [];
    dfsfunc(nums, len, stack, used, 0, dfs);
    console.log(dfs);
    return dfs;
};

permute([ 1, 2, 3 ]);