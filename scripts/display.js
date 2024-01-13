function displayPetCards() {
  const DIV = document.getElementById("pets");
  let card = ""; //clears the default undefined
  // travel the array (for)
  for (let i = 0; i < petSalon.pets.length; i++) {
    let pet = petSalon.pets[i];
    console.log(pet);
    //create HTML template
    card += `
    <tr id="${pet.id}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.payment}</td>
            <td>${pet.price}</td>
            <td><button onclick="deletePet(${pet.id})">🗑️</button></td>
        </tr>
    `;
    // console.log(card);
  }
  DIV.innerHTML = card;
  //inserts the HTML template into the register.html
}
