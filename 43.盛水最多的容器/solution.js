/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (heights) {
    let left = 0, right = heights.length - 1, max = 0;
    while (left < right) {
        if (heights[left] >= heights[right]) {
            max = Math.max(heights[right] * (right - left), max);
            right--;
        }
        if (heights[left] <= heights[right]) {
            max = Math.max(heights[left] * (right - left), max);
            left++;
        }
    }
    return max;
};