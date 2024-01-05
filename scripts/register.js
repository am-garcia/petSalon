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
let counter = 0;
//object contructor (function)
function Pet(name, age, gender, breed, service) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.id = counter++;
}

function isValid(aPet) {
  let validation = true;

  if (aPet.name == "") {
    validation = false;
    alert("Please add name");
  }

  if (aPet.service == "") {
    validation = false;
    alert("Please add service");
  }

  return validation;
}

function register() {
  console.log("Registering");
  //get values from inputs
  let inputName = document.getElementById("txtName").value;
  let inputAge = document.getElementById("txtAge").value;
  let inputGender = document.getElementById("txtGender").value;
  let inputBreed = document.getElementById("txtBreed").value;
  let inputService = document.getElementById("txtService").value;

  //creating the object
  let newPet = new Pet(
    inputName,
    inputAge,
    inputGender,
    inputBreed,
    inputService
  );
  //push the object
  if (isValid(newPet) == true) petSalon.pets.push(newPet);
  //display the pets array in the console
  // console.log(petSalon.pets);
  displayPetCards();
}

function deletePet(petID) {
  //petSalon.pets.pop(petID);
  console.log("Deleting pet " + petID);
  let deleteIndex;
  document.getElementById(petID).remove(); //remove form HTML
  for (let i = 0; i < petSalon.pets.length; i++) {
    // travel the array
    let pet = petSalon.pets[i]; // getting the current pet
    if (pet.id == petID) {
      deleteIndex = i; // found the pet, store the index
    }
  }
  petSalon.pets.splice(deleteIndex, 1); //removes pet from the array
}

function init() {
  //creating pets using constructor
  let p1 = new Pet("Scooby", 60, "Male", "Dane", "Wash");
  let p2 = new Pet("Foxy", 21, "Female", "Fox", "Wash");
  let p3 = new Pet("Spot", 33, "Male", "Mixed", "Nails");
  //pushing pets into the pets array
  petSalon.pets.push(p1, p2, p3);

  //console.log(petSalon.pets);
  displayPetCards();
}
//waits for render the HTML
window.onload = init;
