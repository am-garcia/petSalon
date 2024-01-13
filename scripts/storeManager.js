function saveArray(item) {
  let anArray = readArray();
  anArray.push(item);
  let st = JSON.stringify(anArray); //convert array into string
  console.log(st);
  localStorage.setItem("services", st); //save the string into local storage
}

function readArray() {
  console.log(localStorage.getItem("services"));
  let services = JSON.parse(localStorage.getItem("services")); //convert the string back into an array
  if (services == null) {
    services = [];
  }
  return services;
}

// function readArray() {
//   // get the info from the LS
//   let data = localStorage.getItem("services");
//   if (!data) {
//     //NOT data?
//     return []; // creating the array the first time
//   } else {
//     //parse it back into array (obj)
//     let list = JSON.parse(data);
//     // display the array on the console
//     return list;
//   }
// }
