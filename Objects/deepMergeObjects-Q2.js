/* 
Write a function that takes two JSON objects as input and merges them into a single JSON object. Handle conflicts if both objects have the same property.
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

let obj2 = {
  age: 35,
  address: {
    street: "123 Main St",
    city: "San Francisco",
    location: {
      latitude: 37.7749,
      longitude: 122.4194,
      details: {
        population: 884400,
        timezone: "Pacific Standard Time",
        landmarks: ["Golden Gate Bridge", "Alcatraz Island"],
      },
    },
  },
  hobbies: ["cooking"],
  profession: "Engineer",
};

function mergeObjects(obj1, obj2) {
  let newObj = {};

  newObj = { ...obj1, ...obj2 };
  return newObj;
}

// The deepMergeObjects function takes two parameters: obj1 and obj2. These are the objects to be merged.
function deepMergeObjects(obj1, obj2) {
  // 1. Create a copy of obj1.
  //    - If obj1 is an array, use spread operator (...) to create a shallow copy.
  //    - Otherwise, use spread operator with an empty object ({}) to create a shallow copy of the object properties.
  let mergedObjects = Array.isArray(obj1) ? [...obj1] : { ...obj1 };

  // 2. Check if both obj1 and obj2 are not objects (including null and primitives).
  //    - If neither is an object, there's nothing to merge, so return null.
  if (typeof obj1 !== "object" && typeof obj2 !== "object") return null;

  // 3. Loop through all properties (keys) in obj2.
  for (const key in obj2) {
    // 4. Check if the corresponding property (key) doesn't exist in obj1 or if it's not an object in obj1.
    //    - If true, it means the property only exists in obj2 or exists but is not an object in obj1.
    //    - In this case, assign the value from obj2[key] directly to mergedObjects[key].
    //      This prioritizes properties from obj2 if they are missing or not objects in obj1.
    if (obj1[key] === undefined || typeof obj1[key] !== "object") {
      mergedObjects[key] = obj2[key];
    }

    // 5. Check if the property (key) exists in obj1 and is an object, but the corresponding property in obj2 is not an object.
    //    - If true, it means the property exists in both objects, but the value in obj2 is not an object.
    //    - In this case, assign the value from obj2[key] directly to mergedObjects[key].
    //      This prioritizes properties from obj2 if they are not objects in obj2.
    if (typeof obj1[key] === "object" && typeof obj2[key] !== "object") {
      mergedObjects[key] = obj2[key];
    }

    // 6. Check if both obj1[key] and obj2[key] are objects.
    //    - If true, it means both objects have a nested object for the same key.
    //    - Perform a recursive deep merge on these nested objects by calling deepMergeObjects(obj1[key], obj2[key]).
    //    - The result of the recursive call (merged nested object) is then assigned to mergedObjects[key].
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      mergedObjects[key] = deepMergeObjects(obj1[key], obj2[key]);
    }
  }

  // 7. After iterating through all properties of obj2, return the final merged object (mergedObjects).
  return mergedObjects;
}
console.log(deepMergeObjects(obj1, obj2));
