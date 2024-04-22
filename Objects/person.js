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

  getBirthYear() {
    let currentYear = new Date(Date.now()).getFullYear();
    let birthYear = currentYear - this.age;
    return birthYear;
  },

  getFullAddress() {
    let fullAddress = "";

    for (const key in this.address) {
      fullAddress += this.address[key] + " ";
    }

    return fullAddress;
  },
};

function clonedObj(){
    
}

console.log(person.getFullAddress());
