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

//defines a function named `deepCloneObject` that takes an object as input.
function deepCloneObject(obj) {
  //creates an empty object named `clonedObj` that will hold the cloned data.
  let clonedObj = {};

  // This loop iterates over all the properties of the input object `obj`.
  for (let key in obj) {
    // This condition checks if the current property value is an object.
    if (typeof obj[key] === "object") {
      // If it's an object, call the `deepCloneObject` function recursively to clone that object as well.
      clonedObj[key] = deepCloneObject(obj[key]);
    } else {
      // If it's not an object, simply copy the value from the original object to the cloned object.
      clonedObj[key] = obj[key];
    }
  }
  // After iterating through all properties, the function returns the cloned object.
  return clonedObj;
}

//creates a new object named `obj2` by calling the `deepCloneObject` function and passing `obj1` as the argument.
//copy of `obj1` with all its properties and nested objects.
let obj2 = deepCloneObject(obj1);

//modifies the `name` property of the cloned object `obj2`.
obj2.name = "Loordhu Jeyakumar";

// Finally, this line logs both the original object `obj1` and the cloned object `obj2` to the console.
console.log(obj1);
console.log(obj2);
