// Generate a random array of 10 numbers between 0 and 99
const numberArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);
console.log("Original Array:", numberArray); // Output: Original Array: [array of 10 random numbers]

// Define the Quick Sort Algorithm Function
function quickSortAlgo(arr) {
  //Base Case: If the array has less than 2 elements, it's already sorted (or empty)
  //so we return the array as-is.
  if (arr.length < 2) {
    return arr;
  }

  //Choose the pivot element: Here, we select the middle element of the array.
  const middle = Math.floor(arr.length / 2);
  const pivot = arr[middle];

  //Create two empty arrays to store elements less than and greater than the pivot.
  const leftArray = [];
  const rightArray = [];

  //Partition the array: Loop through all elements except the pivot (middle index).
  for (let i = 0; i < arr.length; i++) {
    // Skip the pivot element itself (middle index).
    if (i == middle) continue;

    //If the current element is less than the pivot, push it to the left array.
    if (pivot > arr[i]) {
      leftArray.push(arr[i]);
    } else {
      //Otherwise, push it to the right array.
      rightArray.push(arr[i]);
    }
  }

  //Recursive Calls: Recursively sort the left and right sub-arrays using the same function.
  //Combine the sorted sub-arrays with the pivot element in the middle using spread syntax (`...`).
  return [...quickSortAlgo(leftArray), pivot, ...quickSortAlgo(rightArray)];
}

// Call the quick sort algorithm and print the sorted array
console.log("Sorted Array:", quickSortAlgo(numberArray));
