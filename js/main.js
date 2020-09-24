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
    errorMsgMS: document.getElementById("errMsgMS"),
    errStatusFN: true,
    errStatusLN: true,
    errStatusCN: true,
    errStatusMeal: true,
    formMsg: document.getElementById("formMsg"),
    orderConf: document.getElementById("orderConf"),
    submit: document.getElementById("btn-submit")

};

let errors = "";

form.orderConf.addEventListener("change", (event) => {
  if(event.target.checked){
    form.submit.removeAttribute("disabled");
  } else { 
    form.submit.setAttribute("disabled", "disabled");
  }

});

form.bevSelectYes.addEventListener("click", () => {
    form.bevForm.style = "display: inline-block";
});

form.bevSelectNo.addEventListener("click", () => {
  form.bevForm.style = "display: none";
});

form.submit.addEventListener("click", (event) => {
    event.preventDefault();
   
form.firstname.addEventListener("blur", validateFN, true);
form.surname.addEventListener("blur", validateLN, true);
form.contact.addEventListener("blur", validateCN, true);
form.customerMeal.addEventListener("click", validateMealSelection, true);

    let validationStatus =  true;

  if(validationStatus){
  
  const request = new XMLHttpRequest();

  request.onload = () => {
        let responseObject = null;
         try {
           // responseObject = JSON.parse(request.responseText);
           console.log(request.responseText);
          } catch(e) {
           console.error(e);
         }

      //   if(responseObject.ok){
        //  console.log("User input sent!")
         // location.href = 'order-success.html';
        // } 
   // 
  }

  
  let select = form.customerMeal;
  let selectValue = select.options[select.selectedIndex].text;
//Return the dropdown option TEXT
  console.log(selectValue);
// Return the dropdown option INDEX
  console.log(select.value);


  let requestData = `firstname=${form.firstname.value}`;
  requestData += `&surname=${form.surname.value}`;
  requestData += `&contact=${form.contact.value}`;
  requestData += `&meal=${selectValue}`;
  requestData += `&student-form=${form.studentYear.value}`;


  request.open('post', './mail.php');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(requestData);

  console.log(requestData);

  }   
  
});


function errorMsgTest(){

  if(form.firstname.value.trim().length === 0 ){
    form.errorMsgFN.innerText = "Missing Firstname Info.";
    form.firstname.style = "border-color: #ff0000;";
    form.formMsg.style = "display: inline-block";
    form.errStatusFN = true;
    return false;
  } else if (form.surname.value.trim().length === 0){
    form.errorMsgLN.innerText = "Missing Surname Info.";
    form.surname.style = "border-color: #ff0000;";
    form.formMsg.style = "display: inline-block";
    form.errStatusLN = true;
    return false;
  } else if (form.contact.value.trim().length === 0){
    form.errorMsgCN.innerText = "Missing Contact Info.";
    form.contact.style = "border-color: #ff0000;";
    form.formMsg.style = "display: inline-block";
    form.errStatusCN = true;
    return false;
  } /* else if(select.value === 0){
    form.errorMsgMS.innerText = "Please make your choice of meal.";
    form.customerMeal.style = "ba-color: #ff0000;";
    form.formMsg.style = "display: inline-block";
    form.errStatusMeal = true;
    return false;
  } */ else if(!form.errStatusFN && !form.errStatusLN && !form.errStatusCN && !form.errStatusMeal){
    form.formMsg.style = "display: none";
    return true;
  }

  
  
  //  else {
  //     form.formMsg.style = "display: inline-block";
  //   return false;
  // }

}

function validateMealSelection(){

  if(select.value === 0){
    form.errorMsgMS.innerText = "Please make your choice of meal.";
    form.customerMeal.style = "border-color: #ff0000;";
    form.formMsg.style = "display: inline-block";
    form.errStatusMeal = true;
   
  } else {

    form.errorMsgFN.innerText = "";
    form.customerMeal.style = "border-color: #2ecc71;";
    form.formMsg.style = "display: none";
    form.errStatusMeal = false;
  
  }

}


function validateFN(){

  if (form.firstname.value == "") {

    form.errorMsgFN.innerText = "Missing Firstname Info.";
    form.firstname.style = "border-color: #ff0000;";
    form.formMsg.style = "display: inline-block";
    form.errStatusFN = true;
 
} else if (form.firstname.value.length > 25) {

  form.errorMsgFN.innerText = "Text Firstname Info. Limit Exceeded!";
  form.firstname.style = "border-color: #ff0000;";
  form.formMsg.style = "display: inline-block";
  form.errStatusFN = true;

} else {

  form.errorMsgFN.innerText = "";
  form.firstname.style = "border-color: #2ecc71;";
  form.formMsg.style = "display: none";
  form.errStatusFN = false;

}

}

function validateLN(){

  if (form.surname.value == "") {

    form.errorMsgLN.innerText = "Missing Surname Info.";
   form.formMsg.style = "display: inline-block"; 
    form.surname.style = "border-color: #ff0000;";
    form.errStatusLN = true;



} else if (form.surname.value.length > 25) {

  form.errorMsgLN.innerText = "Text Surname Info. Limit Exceeded!";
  form.formMsg.style = "display: inline-block";
  form.surname.style = "border-color: #ff0000;";
  form.errStatusLN = true;


} else {

  form.errorMsgLN.innerText = "";
  form.surname.style = "border-color: #2ecc71;";
  form.formMsg.style = "display: none";
  form.errStatusLN = false;

}

}


function validateCN(){

  if (form.contact.value == "") {

    form.errorMsgCN.innerText = "Missing Contact Info.";
    form.formMsg.style = "display: inline-block"; 
    form.contact.style = "border-color: #ff0000;";
    form.errStatusCN = true;
 
} else if (form.contact.value.length > 13 || form.contact.value.length < 13) {

  form.errorMsgCN.innerText = "Contact Info. Format Incorrect!";
  form.formMsg.style = "display: inline-block"; 
  form.contact.style = "border-color: #ff0000;";
form.errStatusCN = true;

} else {

  form.errorMsgCN.innerText = "";
  form.formMsg.style = "display: none"; 
  form.contact.style = "border-color: #2ecc71;";
  form.errStatusCN = false;
}

}
