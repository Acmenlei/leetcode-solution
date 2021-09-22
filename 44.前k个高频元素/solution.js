/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const heapAdjust = function (arr, i, n) {
  let max = i,
    subl = 2 * i + 1,
    subr = 2 * i + 2;
  if (subl < n && arr[subl][1] > arr[max][1]) max = subl;
  if (subr < n && arr[subr][1] > arr[max][1]) max = subr;
  if (max != i) {
    swap(arr, i, max);
    heapAdjust(arr, max, n);
  }
};
const initHeap = function (arr, n) {
  for (let start = Math.floor(n / 2) - 1; start >= 0; start--) {
    heapAdjust(arr, start, n);
  }
};
const heapSort = function (arr, n, k, ans) {
  initHeap(arr, n); // 初始化堆
  for (let i = n - 1; i >= n - k; i--) {
    ans.push(arr[0][0]);
    swap(arr, 0, i);
    heapAdjust(arr, 0, i);
  }
  return arr;
};
const topKFrequent = function (nums, k) {
  let map = new Map();
  for (let i in nums) {
    if (map.get(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  map = [...map];
  let ans = [];
  // 大顶堆排序
  heapSort(map, map.length, k, ans);
  return ans;
};
