/* Question : Create a JSON object representing a person with properties like name, age, and address. 
Add methods to the object to calculate the person's birth year and full address. */

// Create a person object with properties for name, age, and a nested address object
let person = {
  name: "John",
  age: 30,
  address: {
    no: 1,
    street: "North Street",
    city: "Tenkasi",
    state: "Tamilnadu",
    country: "India",
    pincode: 627814,
  },

  // Method to calculate the person's birth year
  getBirthYear() {
    // Get the current year
    let currentYear = new Date().getFullYear();
    // Calculate the birth year by subtracting age from current year
    let birthYear = currentYear - this.age;
    // Return the birth year
    return birthYear;
  },

  // Method to construct the full address string
  getFullAddress() {
    // Initialize an empty string to store the address
    let fullAddress = "";

    // Loop through each property in the address object
    for (const key in this.address) {
      // Append the address property value followed by a comma and space
      fullAddress += this.address[key] + ", ";
    }
    // Remove the trailing comma and space from the end of the address string
    fullAddress = fullAddress.slice(0, fullAddress.length - 2);

    // Return a formatted string with "Full Address" followed by the full address
    return `Full Address : ${fullAddress}.`;
  },
};
// Call the getBirthYear method to calculate and print John's birth year
console.log(person.getBirthYear());
// Call the getFullAddress method to construct and print John's full address
console.log(person.getFullAddress());
