# Problems : 
 
-   Create a JSON object representing a person with properties like name, age, and address. Add methods to the object to calculate the person's birth year and full address.
    - >   Solution =>: [personObject.js](./personObject.js)

-   Write a function that takes two JSON objects as input and merges them into a single JSON object. Handle conflicts if both objects have the same property.
     - >   Solution =>: [deepMergeObjects-Q2.js](./deepMergeObjects-Q2.js)

-   Write a function to deep clone a JSON object, i.e., create a new JSON object with the same structure and values as the original object, but not referencing the same memory.
     - >   Solution =>: [deepCloneObject.js](./deepCloneObject.js)

-   Write a function that takes a JSON object and a path (string representing the path to a property in the object, e.g., "person.address.city") and returns the value at that path in the object. Handle cases where the path is invalid.
     - >   Solution =>: [getDataUsingPath.js](./getDataUsingPath.js)

-   Implement a function to flatten a nested JSON object, i.e., convert it into a flat JSON object where each key is a dot-separated path to a leaf node in the original object.