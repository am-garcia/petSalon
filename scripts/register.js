// object literal

let petSalon = {
  pets: [
    { name: "Scooby", age: 21, gender: "male", service: "nails" },
    {
      name: "Fido",
      age: 28,
      gender: "male",
      service: "coat",
    },
    {
      name: "spot",
      age: 9,
      gender: "male",
      service: "coat and nails",
    },
  ],
};

console.table(petSalon.pets);

console.log(petSalon);
document.getElementById("title").innerHTML = petSalon.name;
