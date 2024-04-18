/* 
\
Merge sort is a divide-and-conquer sorting algorithm that works by recursively breaking down an array into subarrays until each subarray contains a single element. Then, it merges the sorted subarrays back together in a specific order to create the final sorted array.
*/

// Generate a random array of 10 numbers between 0 and 99
const numberArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);
console.log("Original Array:", numberArray); // Output: Original Array: [array of 10 random numbers]

// Merge sort algorithm (top-level function)
function mergeSortAlgo(arr) {
  // Initiate the merge sort process by dividing the array
  return divide(arr);
}

// Divide function (recursive)
function divide(arr) {
  // Base case: If the array has only one element (or less), it's already sorted
  if (arr.length < 2) {
    return arr;
  }
  // Find the middle index for dividing the array
  const middle = Math.floor(arr.length / 2);

  // Create left and right subarrays by slicing the original array
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  // Recursively divide the left and right subarrays
  const leftSorted = divide(leftArr);
  const rightSorted = divide(rightArr);

  // Merge the sorted left and right subarrays back together
  return mergeArrays(leftSorted, rightSorted);
}

// The function to merge two sorted arrays into one sorted array
function mergeArrays(leftArray, rightArray) {
  // Create an empty array to store the sorted elements
  const sortedArray = [];

  // Loop until both left and right arrays are empty
  while (leftArray.length && rightArray.length) {
    // Compare the first elements of each subarray
    if (leftArray[0] < rightArray[0]) {
      // Push the smaller element from the left array to the sorted array
      sortedArray.push(leftArray.shift());
    } else {
      // Push the smaller element from the right array to the sorted array
      sortedArray.push(rightArray.shift());
    }
  }
  // Concatenate any remaining elements from either subarray to the sorted array
  return [...sortedArray, ...leftArray, ...rightArray];
}

// Call the merge sort algorithm and print the sorted array
console.log("Sorted Array:", mergeSortAlgo(numberArray));
