// Define a class SortedArray
class SortedArray {
  // Constructor initializes an empty private array to store sorted elements
  constructor() {
    this._array = []; // Private property to hold the sorted array
  }

  // Method to add a value to the array in a sorted manner
  push(value) {
    // Initialize index to the current length of the array
    let index = this._array.length;

    // Shift elements to the right as long as the previous element is greater than the value to be inserted
    while (index > 0 && this._array[index - 1] > value) {
      this._array[index] = this._array[index - 1]; // Shift element one position to the right
      index--; // Decrement index to move left in the sorted part
    }

    // Insert the value at the correct sorted position
    this._array[index] = value;
  }

  // Getter method to return a copy of the internal sorted array (prevents modification)
  get array() {
    return [...this._array];
  }

  // Getter method to return the length of the internal array
  get length() {
    return this._array.length;
  }
}

// Create an instance of the SortedArray class
let sortedArr = new SortedArray();

// Loop to populate the sorted array with 10 random numbers
while (sortedArr.length <= 10) {
  sortedArr.push(Math.floor(Math.random() * 100));
}

// Print the sorted array
console.log(sortedArr.array);
