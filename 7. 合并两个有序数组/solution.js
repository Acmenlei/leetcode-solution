const first = [1, 2, 4, 6, 8];
const second = [2, 3, 7, 9, 10, 15];

// const solution = function (p, q) {
//   let container = [];
//   while (p[0] && q[0]) {
//     const r = p[0] > q[0] ? q.shift() : p.shift();
//     container.push(r);
//   }
//   return q[0] ? container.concat(q) : container.concat(p);
// };

// const r = solution(first, second);
// console.log(...r);

var merge = function (nums1, m, nums2, n) {
  let arr = [],
    i = 0,
    j = 0;
  while (i < m && j < n) {
    if (nums1[i] > nums2[j]) {
      arr.push(nums2[j]);
      j++;
    } else {
      arr.push(nums1[i]);
      i++;
    }
  }
  while (i < m) {
    arr.push(nums1[i]);
    i++;
  }
  while (j < n) {
    arr.push(nums2[j]);
    j++;
  }
  nums1 = [...arr];
  console.log(nums1);
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
