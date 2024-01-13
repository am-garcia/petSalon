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

// function readArray() {
//   //get the info from the LS
//   let data = localStorage.getItem("services");
//   if (!data) {
//     //no data
//     return []; //creating the array for the first time
//   } else {
//     //parse it back into array (obj)
//     let list = JSON.parse(data);
//     //display array in the console
//     return list;
//   }
// }

//object contructor (function)
function Pet(name, age, gender, breed, service, payment) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.payment = payment;
  this.id = counter++;
}

function register() {
  console.log("Registering");
  //get values from inputs
  let inputName = document.getElementById("txtName").value;
  let inputAge = document.getElementById("txtAge").value;
  let inputGender = document.getElementById("txtGender").value;
  let inputBreed = document.getElementById("txtBreed").value;
  let inputService = document.getElementById("txtService").value;
  let inputPayment = document.getElementById("txtPayment").value;

  //creating the object
  let newPet = new Pet(
    inputName,
    inputAge,
    inputGender,
    inputBreed,
    inputService,
    inputPayment,
    getServicePrice(inputService)
  );

  //push the object
  if (isValid(newPet) == true) {
    petSalon.pets.push(newPet);
    //display the pets array in the console
    // console.log(petSalon.pets);
    displayPetCards();
    $("input").val(""); //clears input after registration
    showNotification(
      "notifications",
      "alert-success",
      "Registration Successful"
    );
  } else {
    showNotification(
      "notifications",
      "alert-danger",
      "Please add all required fields"
    );
  }
}

function getServicePrice(serviceDescription) {
  let services = readArray(); //get services list from local storage
  let price;
  for (let i = 0; i < services.length; i++) {
    //travel array
    let service = services[i];
    if (service.description == serviceDescription) {
      // finding the description
      price = service.price; //assign the price
    }
  }
  return Number(price); // return the price
}

function isValid(aPet) {
  let validation = true;
  $("input").removeClass("bg-red");
  if (aPet.name == "") {
    validation = false;
    // alert("Please add name");
    $("#txtName").addClass("bg-red");
  }
  if (aPet.service == "") {
    validation = false;
    //alert("Please add service");
    $("#txtService").addClass("bg-red");
  }
  if (aPet.payment == "") {
    validation = false;
    //alert("Please add payment");
    $("#txtPayment").addClass("bg-red");
  }
  return validation;
}

function showNotification(id, styling, message) {
  $("#" + id).removeClass("alert-success");
  $("#" + id).removeClass("alert-danger");
  $("#" + id)
    .text(message)
    .addClass(styling)
    .fadeIn(300)
    .delay(2000)
    .slidUp(300);
}

function deletePet(petID) {
  //petSalon.pets.pop(petID);
  document.getElementById(petID).remove(); //remove form HTML
  console.log("Deleting pet " + petID);
  let deleteIndex;

  for (let i = 0; i < petSalon.pets.length; i++) {
    // travel the array
    let pet = petSalon.pets[i]; // getting the current pet
    if (pet.id == petID) {
      deleteIndex = i; // found the pet, store the index
    }
  }
  petSalon.pets.splice(deleteIndex, 1); //removes pet from the array
}

function addServices() {
  let services = readArray();
  for (let i = 0; i < services.length; i++) {
    $("#textServices").append(
      `<option value="${services[i].description}">${services[i].description}</option>`
    );
  }
}

function init() {
  //creating pets using constructor
  let p1 = new Pet(
    "Scooby",
    60,
    "Male",
    "Dane",
    "Wash",
    "Cash",
    getServicePrice("Shower")
  );
  let p2 = new Pet(
    "Foxy",
    21,
    "Female",
    "Fox",
    "Wash",
    "Card",
    getServicePrice("Vaccine")
  );
  let p3 = new Pet(
    "Spot",
    33,
    "Male",
    "Mixed",
    "Nails",
    "Cash",
    getServicePrice("Grooming")
  );
  //pushing pets into the pets array
  petSalon.pets.push(p1, p2, p3);
  addServices();
  displayPetCards();

  //hook events
  $("#notifications").hide();
}
//waits for render the HTML
window.onload = init;
