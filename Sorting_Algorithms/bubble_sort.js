// Initialize an array of numbers
const numArr = [70, 97, 21, 6, 77, 20, 4, 36, 88, 23];

// Define the bubbleSort function
function bubbleSort(arr) {
  // Outer loop: iterate over each element in the array
  for (let iterator = 0; iterator < arr.length; iterator++) {
    /* 
    Initialize a flag to true. This flag is used to optimize the algorithm. 
    If no swap is made in an inner loop iteration, it means the array is already sorted.
    */
    let flag = true;

    // Inner loop: iterate from the second element to the end of the array, ignoring the elements at the end that have already been sorted
    for (let index = 1; index < arr.length - iterator; index++) {
      // If the current element is less than the previous one, swap them
      if (arr[index] < arr[index - 1]) {
        // Set the flag to false, indicating a swap has been made in this inner loop iteration
        flag = false;

        // Swap arr[index] and arr[index - 1] using bitwise XOR operation
        arr[index - 1] = arr[index] ^ arr[index - 1];
        arr[index] = arr[index - 1] ^ arr[index];
        arr[index - 1] = arr[index] ^ arr[index - 1];
      }
    }
    // If the flag is still true after the inner loop, it means no swap was made and the array is already sorted. So, break the outer loop.
    if (flag) break;
  }

  // Return the sorted array
  return arr;
}

// Call the bubbleSort function with numArr as the argument and log the result
console.log(bubbleSort(numArr));
