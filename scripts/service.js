let services = [];

//create constructor
function Service(description, price) {
  this.description = description;
  this.price = price;
}

function isValid(newService) {
  let validation = true;
  $("input").removeClass("bg-red");
  if (newService.description == "") {
    validation = false;
    $("#txtDescription").addClass("bg-red");
  }
  if (newService.pricc == "") {
    validation = false;
    $("txtPrice").addClass("bg-red");
  }
  return validation;
}

//create register function
function register() {
  console.log("adding a new service");
  let inputDescription = $("#txtDescription").val();
  let inputPrice = $("#txtPrice").val();

  let newService = new Service(inputDescription, inputPrice);
  saveArray(newService);
  //services.push(newService);
  // if (isValid(newService) == true) {
  //   saveArray(newService);
  //   $("input").val();
  // } else {
  //   alert("please fill all inputs");
  // }

  console.log(services);
}

//create init function
function init() {
  let s1 = new Service("Grooming", 45);
  services.push(s1);
  let s2 = new Service("Vaccine", 20);
  services.push(s2);
  let s3 = new Service("Training", 50);
  services.push(s3);
  //hook events
  $("#btnRegister").on("click", register);
}
//wait for render to HTML
window.onload = init;
