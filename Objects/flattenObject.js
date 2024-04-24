/* 
Implement a function to flatten a nested JSON object, i.e., convert it into a flat JSON object where each key is a dot-separated path to a leaf node in the original object.
*/

let obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
    location: {
      latitude: 40.7128,
      longitude: 74.006,
      details: {
        population: 8623000,
        timezone: "Eastern Standard Time",
      },
    },
  },
  hobbies: ["reading", "gaming"],
};

// Function to flatten a nested object into a single level object.
function flattenObject(obj, parentKey = "") {
  // Create an empty object to store the flattened key-value pairs
  let flattenObj = {};

  // Iterate over each key in the original object
  for (const key in obj) {
    // Construct a new key for the flattened object
    // If a parent key is provided, combine it with the current key using a dot separator, If there is no parent key, the new key is just the current key.
    let newKey = parentKey ? parentKey + "." + key : key;

    // Check if the value associated with the current key is an object
    if (typeof obj[key] === "object") {
      // If it's an object, recursively call the flattenObject function
      // Pass the nested object and the constructed new key for further processing
      // Merge the returned object with the current flattened object.
      flattenObj = { ...flattenObj, ...flattenObject(obj[key], newKey) };
    } else {
      // If the value is not an object, directly add the key-value pair to the flattened object
      flattenObj[newKey] = obj[key];
    }
  }
  // Return the flattened object containing all key-value pairs from the nested structure
  return flattenObj;
}

console.log(flattenObject(obj1));
