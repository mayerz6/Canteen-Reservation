const form = {
    firstname: document.getElementById("firstname"),
    surname: document.getElementById("surname"),
    contact: document.getElementById("contact"),
    studentYear: document.getElementById("ddlStudent"),
    customerMeal: document.getElementById("ddlMeal"),
    mealQty: document.getElementById("ddlMealQty"),
    bevForm: document.getElementById("bevSelection"),
    bevSelectYes: document.getElementById("radioBevYes"),
    bevSelectNo: document.getElementById("radioBevNo"),
    customerBeverage: document.getElementById("ddlBeverage"),
    beverageStatus: false,
    beverageQty: document.getElementById("ddlBevQty"),
    comments: document.getElementById("usrComments"),
    errorMsgFN: document.getElementById("errMsgFN"),
    errorMsgLN: document.getElementById("errMsgLN"),
    errorMsgCN: document.getElementById("errMsgCN"),
    errStatusFN: false,
    errStatusLN: false,
    errStatusCN: false,
    formMsg: document.getElementById("formMsg"),
    submit: document.getElementById("btn-submit")
};

let errors = "";

form.bevSelectYes.addEventListener("click", () => {
    form.bevForm.style = "display: inline-block";
});

form.bevSelectNo.addEventListener("click", () => {
  form.bevForm.style = "display: none";
});

form.submit.addEventListener("click", () => {

  validateFN();
  validateLN();
  validateCN();
  errorMsgTest();
 /* console.log(form); */

});

function errorMsgTest(){

  if(!form.errStatusFN && !form.errStatusLN & !form.errStatusCN){
    form.formMsg.style = "display: none";
  } else {
    form.formMsg.style = "display: inline-block";
  }
}

function validateFN(){

  if (form.firstname.value == "") {

    form.errorMsgFN.innerText = "Missing Firstname Info.";
    form.firstname.style = "border-color: #ff0000;";
    form.errStatusFN = true;
 
} else if (form.firstname.value.length > 25) {

  form.errorMsgFN.innerText = "Text Firstname Info. Limit Exceeded!";
  form.firstname.style = "border-color: #ff0000;";
  form.errStatusFN = true;
  /*  form.formMsg.style = "display: inline-block"; */

} else {

  form.errorMsgFN.innerText = "";
 /* form.formMsg.style = "display: none"; */
  form.firstname.style = "border-color: #2ecc71;";
  form.errStatusFN = false;

}

}

function validateLN(){

  if (form.surname.value == "") {

    form.errorMsgLN.innerText = "Missing Surname Info.";
/* form.formMsg.style = "display: inline-block"; */
    form.surname.style = "border-color: #ff0000;";
    form.errStatusLN = true;
  /*  console.log("Clicked!");
      console.log("Missing Firstname Info."); */


} else if (form.surname.value.length > 25) {

  form.errorMsgLN.innerText = "Text Surname Info. Limit Exceeded!";
  form.surname.style = "border-color: #ff0000;";
  form.errStatusLN = true;
  /*  form.formMsg.style = "display: inline-block"; */

} else {

  form.errorMsgLN.innerText = "";
 /* form.formMsg.style = "visibility: hidden"; */
  form.surname.style = "border-color: #2ecc71;";
  form.errStatusLN = false;

}

}


function validateCN(){

 
  if (form.contact.value == "") {

    form.errorMsgCN.innerText = "Missing Contact Info.";
  /*  form.formMsg.style = "display: inline-block";  */
    form.contact.style = "border-color: #ff0000;";
    form.errStatusCN = true;
 
} else if (form.contact.value.length > 13 || form.contact.value.length < 13) {

  form.errorMsgCN.innerText = "Contact Info. Format Incorrect!";
  form.contact.style = "border-color: #ff0000;";
  /*  form.formMsg.style = "display: inline-block"; */
form.errStatusCN = true;

} else {

  form.errorMsgCN.innerText = "";
/*  form.formMsg.style = "display: none"; */
  form.contact.style = "border-color: #2ecc71;";
  form.errStatusCN = false;
}

}
