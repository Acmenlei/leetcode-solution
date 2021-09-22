var maxSubArray = function (nums) {
    let maxSum = nums[0], sum = 0;
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        maxSum = maxSum > sum ? maxSum : sum;
        if(sum < 0 ) {
            sum = 0;
        }
    }
    return maxSum;
};