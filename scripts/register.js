// object literal

let petSalon = {
  name: "The Fashion Pet",
  address: {
    street: "Washington Blvd",
    number: "400",
    zip: "90000",
  },
  hours: {
    open: "9:00 am",
    closed: "8:00 pm",
  },
  pets: [],
};

//object contructor (function)
function Pet(name, age, gender, breed) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
}

function register() {
  console.log("Registering");
  //get values from inputs
  let inputName = document.getElementById("txtName").value;
  let inputAge = document.getElementById("txtAge").value;
  let inputGender = document.getElementById("txtGender").value;
  let inputBreed = document.getElementById("txtBreed").value;

  //creating the object
  let newPet = new Pet(inputName, inputAge, inputGender, inputBreed);
  //push the object
  petSalon.pets.push(newPet);
  //display the pets array in the console
  console.log(petSalon.pets);
}

//creating pets using constructor
let p1 = new Pet("Scooby", 60, "Male", "Dane");
let p2 = new Pet("Foxy", 21, "Female", "Fox");
let p3 = new Pet("Spot", 33, "Male", "Mixed");
//pushing pets into the pets array
petSalon.pets.push(p1, p2, p3);

console.log(petSalon.pets);
