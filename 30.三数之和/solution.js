// var threeSum = function(nums) {
//     let left = 0, right = nums.length - 1, pivot = left + 1, rs = [];
//     for (let i = 1; i <right; i++) {
//         while ( pivot < nums.length - 1 ) {
//             console.log(left, right, pivot);
//             if (nums[left] + nums[right] + nums[pivot] == 0) {
//                 rs.push([nums[left], nums[right], nums[pivot]]);
//             }
//             pivot++;
//         };
//         left = i;
//         pivot = left + 1;
       
//     }
//     console.log(rs);
//     return rs;
// };
// threeSum([-1,0,1,2,-1,-4]);
