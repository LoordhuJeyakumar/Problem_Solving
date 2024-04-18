// Initialize an array of numbers
const numArr = [82, 53, 49, -51, 5, 60, 90, 59, 87, 0];

// Define the insertion sort function
function insertion_sort(arr) {
  //Iterate over the array Start from the second element (assume the first element is sorted)
  for (let i = 1; i < arr.length; i++) {
    // Pick the current element (to be inserted) from the unsorted part of the array
    // Store the current element whose left side is checked for its correct position

    let currentElement = arr[i];

    // Initialize an index variable to store the position where the current element should be inserted
    let index = i;

    // Shift elements of the sorted part of the array (on the left of the current element) one position to the right
    // as long as they are greater than the current element
    while (index > 0 && arr[index - 1] > currentElement) {
      // Move the greater element to the right
      arr[index] = arr[index - 1];

      // Move to the previous position
      index--;
    }

    // Insert the current element at its correct position in the sorted part of the array
    arr[index] = currentElement;
  }

  // Return the sorted array
  return arr;
}

// Call the insertion sort function to sort the numArr array and store the result in sortedArr
const sortedArr = insertion_sort(numArr);

// Print the sorted array
console.log(sortedArr);
