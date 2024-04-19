// Generate a random array of 10 numbers between 0 and 99
const numberArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);
console.log("Original Array:", numberArray); // Output: Original Array: [array of 10 random numbers]

// Function to call the Quick Sort algorithm.
// Takes the array to be sorted as input.
function quickSortAlgo(arr) {
  return quickSort(arr);
}

// Recursive Quick Sort function.
// Takes the array, starting and ending indices of the sub-array to sort as input.
function quickSort(arr, start = 0, end = arr.length - 1) {
  // Base Case: If the sub-array has zero or one element (already sorted)
  // Stop recursion when a sub-array has one element or less.
  if (start < end) {
    // Find the pivot element's position.
    const pivotIndex = pivot(arr, start, end);
    // Sort left sub-array (elements smaller than pivot).
    quickSort(arr, start, pivotIndex - 1);
    // Sort right sub-array (elements larger than pivot).
    quickSort(arr, pivotIndex + 1, end);
  }
  // Return the sorted array after all sub-arrays are sorted.
  return arr;
}

// Function to partition the sub-array around the pivot element.
// Takes the array, starting and ending indices of the sub-array as input.
function pivot(arr, start = 0, end = arr.length - 1) {
  // Helper function to swap elements within the array.
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  // Choose the middle element as the pivot
  const pivotIndex = Math.floor((start + end) / 2);
  let pivotElement = arr[pivotIndex];

  // Move the pivot element to the start of the array.
  swap(arr, start, pivotIndex);

  // Index to keep track of the sorted position for elements less than the pivot.
  let swapIndex = start;

  // Loop through the sub-array (excluding the pivot element).
  for (let i = start + 1; i <= end; i++) {
    // If the current element is less than the pivot
    if (arr[i] < pivotElement) {
      // Increment the swap index.
      swapIndex++;
      // Swap the current element with the element at the swap index.
      swap(arr, swapIndex, i);
    }
  }
  // Finally, swap the pivot element with the element at the swap index (its final sorted position).
  swap(arr, start, swapIndex);

  // Return the swap index (position where the pivot element is placed).
  return swapIndex;
}

console.log(quickSortAlgo(numberArray));
