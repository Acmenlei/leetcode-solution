const swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const heapAdjust = function (arr, i, n) {
  let max = i,
    subl = 2 * i + 1,
    subr = 2 * i + 2;
  if (subl < n && arr[subl] > arr[max]) max = subl;
  if (subr < n && arr[subr] > arr[max]) max = subr;
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
const heapSort = function (arr, n) {
  initHeap(arr, n); // 初始化堆
  for (let i = n - 1; i >= 0; i--) {
    swap(arr, 0, i);
    heapAdjust(arr, 0, i);
  }
  return arr;
};
const arr = [3, 8, 52, 2, 6, 1, 2, 5, 9, 4, 7];
heapSort(arr, arr.length);
console.log(arr);
