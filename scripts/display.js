function displayPetCards() {
  const DIV = document.getElementById("pets");
  let card = ""; //clears the default undefined
  // travel the array (for)
  for (let i = 0; i < petSalon.pets.length; i++) {
    let pet = petSalon.pets[i];
    console.log(pet);
    //create HTML template
    card += `
    <div class="card-container">
    <div class="card">
        <div id=${pet.id} class="container">
            <h4><b>${pet.name}</b></h4>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.breed}</p>
            <p>${pet.service}</p>
            <button onclick="deletePet(${pet.id})">🗑️</button>
        </div>
    </div>
</div>
    `;
    // console.log(card);
  }
  DIV.innerHTML = card;
  //inserts the HTML template into the register.html
}
