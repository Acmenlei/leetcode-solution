/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(parseInt(nums1.join("")) === 0 || parseInt(nums2.join(""))=== 0 ) return 0
    const arr = nums1.concat(nums2).sort((a,b) => a-b);
    const length = arr.length
    let target;
    if(length % 2 === 0) {
        let num1 = arr[length/2-1];
        let num2 = arr[length/2];
        console.log(((num1+num2)/2));
        target = (num1+num2)/2
    } else {
        target = arr[Math.floor(length/2)]
    }
    return parseFloat(target)
};

console.log(findMedianSortedArrays([3,5,7,6,8,9],[1,2]));
