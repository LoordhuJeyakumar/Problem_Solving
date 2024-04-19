

// Define the quick sort function
function quickSortAlgo(arr, start = 0, end = arr.length - 1) {
  // Base case: if the array has less than 2 elements, it is already sorted
  if (start < end) {
    // Partition the array and get the final index of the pivot
    const pivotIndex = partition(arr, start, end);
    // Recursively apply the quick sort algorithm to the left partition
    quickSortAlgo(arr, start, pivotIndex);
    // Recursively apply the quick sort algorithm to the right partition
    quickSortAlgo(arr, pivotIndex + 1, end);
  }
  // Return the sorted array
  return arr;
}
// Define the partition function
function partition(arr, start, end) {
  // Choose a random pivot index
  const pivotIndex = Math.floor(Math.random() * (end - start + 1) + start);
  // Swap the pivot element with the first element
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  // Initialize two pointers: i starts from the second element, j starts from the last element
  let i = start + 1;
  let j = end;
  // Start an infinite loop
  while (true) {
    // Increment i as long as the elements are less than or equal to the pivot
    while (i <= j && arr[i] <= arr[start]) i++;
    // Decrement j as long as the elements are greater than the pivot
    while (i <= j && arr[j] > arr[start]) j--;
    // If i is still less than or equal to j, swap the elements at i and j
    if (i <= j) [arr[i], arr[j]] = [arr[j], arr[i]];
    // If i has crossed j, break the loop
    else break;
  }
  // Swap the pivot (currently at the first position) with the element at j
  [arr[start], arr[j]] = [arr[j], arr[start]];
  // Return the final index of the pivot
  return j;
}

const numberArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);
console.log("Original Array:", numberArray);
console.log("Sorted Array:", quickSortAlgo(numberArray));
