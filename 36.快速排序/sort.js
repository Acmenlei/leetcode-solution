const partition = function (arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] >= pivot) --high;
    arr[low] = arr[high];
    while (low < high && arr[low] <= pivot) ++low;
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
};
const quickSort = function (arr, low, high) {
  if (low < high) {
    const pivot = partition(arr, low, high); // 以基准点对每个点进行交换
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
};

const arr = [3, 8, 52, 2, 6, 1, 2, 5, 9];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // 排好序的数组
