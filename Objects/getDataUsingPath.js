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

// The function 'getDataUsingPath' is defined with two parameters: 'obj' and 'path'.
function getDataUsingPath(obj, path) {
  // 1. Split the path string into an array of property names
  let pathArray = path.split(".");

  // 2. Check for an empty object (null or undefined)
  if (!obj) return undefined; // If the object is empty, the path cannot be accessed, so return undefined

  // 3. Base case: If there's only one property in the path
  if (pathArray.length === 1) return obj[pathArray[0]]; // Directly access and return the value using the property name

  // 4. Recursive case: Navigate through nested objects
  //  - Access the value of the first property from the current object
  //  - Create a new path string by removing the first element and joining the remaining elements
  //  - Call the function recursively with the new object and modified path
  return getDataUsingPath(obj[pathArray[0]], pathArray.slice(1).join("."));
}

// The function 'getDataUsingPath_2' is defined with two parameters: 'obj' and 'path'.
function getDataUsingPath_2(obj, path) {
  // 1. Split the path string into an array of property names
  let pathArray = path.split(".");

  // 2. Check for an empty object (null or undefined)
  if (!obj) return undefined; // If the object is empty, the path cannot be accessed, so return undefined

  //If there's only one property in the path
  if (pathArray.length === 1) return obj[pathArray[0]]; // Directly access and return the value using the property name

  // 4. Initialize a variable to hold the current object being traversed
  let data = obj;

  // 5. Loop through each property name in the path
  for (let i = 0; i < pathArray.length; i++) {
    // 6. Check if the current object has the property
    if (data[pathArray[i]]) {
      // 7. If it does, update the data variable to the value of that property
      data = data[pathArray[i]];
    } else {
      // 8. If not, the path is invalid, so return undefined
      return undefined;
    }
  }

  // 9. After iterating through the entire path, return the final value (data)
  return data;
}

console.log(getDataUsingPath(obj1, "address.location.details"));
console.log(getDataUsingPath_2(obj1, "address.location.details"));
