// Initialize an array of numbers
const numArray = [82, 53, 49, -51, 5, 60, 90, 59, 87, 0];

// Define the selection sort function
function selection_sort(arr) {
  // Loop over the array. For each iteration, the element at the current index is considered as the minimum
  for (let index = 0; index < arr.length; index++) {
    let minIndex = index;

    // Loop over the rest of the array to find if there is any element smaller than the current minimum
    for (
      let secondIndex = minIndex + 1;
      secondIndex < arr.length;
      secondIndex++
    ) {
      // If a smaller element is found, update the minimum index
      if (arr[minIndex] > arr[secondIndex]) {
        minIndex = secondIndex;
      }
    }
    // If the minimum index is not the current index, swap the elements at the minimum index and the current index
    if (index != minIndex) {
      let temp = arr[index];
      arr[index] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  // Return the sorted array

  return arr;
}
console.log(selection_sort(numArray));
