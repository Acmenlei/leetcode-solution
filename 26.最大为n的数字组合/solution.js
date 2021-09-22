var atMostNGivenDigitSet = function (digits, n) {
    let dfs = { count: 0 },
        num = "",
        len = digits.length;
    helper(digits, len, dfs, num, n);
    return dfs.count;
};

var helper = function (nums, len, dfs, num, n) {
    for (let i = 0; Number(num) <= n; i = i > len - 1 ? 0 : i + 1) {
        num += nums[i];
        if (Number(num) <= n) dfs.count++;
        else break;
        helper(nums, len, dfs, num, n);
        num = (num + "").substr(0, num.length - 1);
    }
};
console.log(atMostNGivenDigitSet(["1","2","3","4","5","6","7","8","9"],74546987));;
