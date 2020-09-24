class Validator {
        static REQUIRED = "REQUIRED";
        static MIN_LENGTH = "MIN_LENGTH";
        static NUMBER = "NUMBER";
        static MAX_LENGTH = "MAX_LENGTH";
        static DROP_BOX = "DROP_BOX";

    static validate(value, flag, validatorValue){
        if(flag === this.REQUIRED){
            return value.trim().length > 0;
        }
        if(flag === this.MIN_LENGTH){
            return value.trim().length > validatorValue;
        }
        if(flag === this.MAX_LENGTH){
            return value.length < validatorValue;
        }
        if(flag === this.NUMBER){
            return isNaN(value) ;
        }if(flag === this.DROP_BOX){
            return value > 0;
        }
    }

}

class Order {
    constructor(){
      
    }
}

class UserInputForm {

    constructor(){

        this.form = {
            firstname: document.getElementById("firstname"),
            surname: document.getElementById("surname"),
            contact: document.getElementById("contact"),
            studentYear: document.getElementById("ddlStudent"),
            mealType: document.getElementById("mealType"),
            customerMeal: document.getElementById("ddlMeal"),
            mealQty: document.getElementById("ddlMealQty"),
            bevForm: document.getElementById("bevSelection"),
            customerBeverage: document.getElementById("ddlBeverage"),
            beverageQty: document.getElementById("ddlBevQty"),
            bevSelectYes: document.getElementById("radioBevYes"),
            bevSelectNo: document.getElementById("radioBevNo"),
            customerComments: document.getElementById("usrComments"),
            orderConf: document.getElementById("orderConf"),
            orderChkbox: document.getElementById("usrChkbox"),
            errorMsgFN: document.getElementById("errMsgFN"),
            errorMsgLN: document.getElementById("errMsgLN"),
            errorMsgCN: document.getElementById("errMsgCN"),
            errorMsgMS: document.getElementById("errMsgMS"),
            formMsg: document.getElementById("formMsg"),
            btnSubmit: document.getElementById("btn-submit")
        }
        
        this.form.studentYear.value = "";
        this.form.customerBeverage.value = "";
        this.form.beverageQty.value = 0;
        this.form.customerComments.value = "";

        
this.form.orderConf.addEventListener("change", (event) => {
    if(event.target.checked){
      this.form.btnSubmit.removeAttribute("disabled");
    } else { 
      this.form.btnSubmit.setAttribute("disabled", "disabled");
    }
  
  });
  
  this.form.bevSelectYes.addEventListener("click", () => {
      this.form.bevForm.style = "display: inline-block";
  });
  
  this.form.bevSelectNo.addEventListener("click", () => {
    this.form.bevForm.style = "display: none";
  });
  
  this.form.btnSubmit.addEventListener("click", this.submitOrder.bind(this));
  
}
    formDataDestroy(){

        this.form.firstname.value = "";
        this.form.surname.value = "";
        this.form.contact.value = "";
        this.form.studentYear.value = 0;
        this.form.firstname.value = "";
        this.form.firstname.value = "";
        this.form.customerMeal.value = "";
        this.form.mealQty.value = "";
        this.form.customerBeverage.value = "";
        this.form.beverageQty.value = "";
        this.form.errorMsgFN.value = "";
        this.form.errorMsgLN.value = "";
        this.form.errorMsgCN.value = "";
        this.form.errorMsgMS.value = "";
        this.form.orderConf.checked = false;

    }

    submitOrder(){  
        
        const fname = this.form.firstname.value;
        const sname = this.form.surname.value;
        const mobile = this.form.contact.value;
        const mealOption = this.form.customerMeal.value;
        const mealQty = this.form.mealQty.value;
       
/* FIRSTNAME Check */
if(!Validator.validate(fname, Validator.REQUIRED)){
    this.form.errorMsgFN.innerText = "Missing Firstname Info.";
    this.form.firstname.style = "border-color: #ff0000;";
    this.form.formMsg.style = "display: inline-block";

    return;

} else if(!Validator.validate(fname, Validator.NUMBER)){
    this.form.errorMsgFN.innerText = "Names don't have in numbers!";
    this.form.firstname.style = "border-color: #ff0000;";
    this.form.formMsg.style = "display: inline-block";

    return;

} else if(Validator.validate(fname, Validator.NUMBER)) {

    this.form.errorMsgFN.innerText = "";
    this.form.firstname.style = "border-color: #2ecc71;";
    this.form.formMsg.style = "display: none";

}
/* SURNAME Check */
if(!Validator.validate(sname, Validator.REQUIRED)){
    this.form.errorMsgLN.innerText = "Missing Surname Info.";
    this.form.surname.style = "border-color: #ff0000;";
    this.form.formMsg.style = "display: inline-block";

    return;

} else if(!Validator.validate(sname, Validator.NUMBER)){
    this.form.errorMsgLN.innerText = "Names don't contain numbers!";
    this.form.surname.style = "border-color: #ff0000;";
    this.form.formMsg.style = "display: inline-block";

    return;

} else if(Validator.validate(sname, Validator.NUMBER)) {

    this.form.errorMsgLN.innerText = "";
    this.form.surname.style = "border-color: #2ecc71;";
    this.form.formMsg.style = "display: none";

}

/* MOBILE Check */
if(!Validator.validate(mobile, Validator.REQUIRED)){
    this.form.errorMsgCN.innerText = "Missing Contact Info.";
    this.form.contact.style = "border-color: #ff0000;";
    this.form.formMsg.style = "display: inline-block";

    return;

}  else if(!Validator.validate(mobile, Validator.MIN_LENGTH, 12)){
    this.form.errorMsgCN.innerText = "Contact Info. Format Incorrect!";
    this.form.contact.style = "border-color: #ff0000;";
    this.form.formMsg.style = "display: inline-block";

    
    if(Validator.validate(mobile, Validator.NUMBER)){
        this.form.errorMsgCN.innerText = "Contact Info. Format Incorrect!";
        this.form.contact.style = "border-color: #ff0000;";
        this.form.formMsg.style = "display: inline-block";
    
        return;
    
    } 

    return;

} else if(Validator.validate(mobile, Validator.MIN_LENGTH, 12)) {

    this.form.errorMsgCN.innerText = "";
    this.form.contact.style = "border-color: #2ecc71;";
    this.form.formMsg.style = "display: none";

}

/* MEAL Selection Check */
if(!Validator.validate(mealOption, Validator.DROP_BOX)){

    this.form.errorMsgCN.innerText = "Please make an order selection.";
    this.form.customerMeal.style = "border-color: #ff0000;";
    this.form.formMsg.style = "display: inline-block";

    return;

}else if(Validator.validate(mealOption, Validator.DROP_BOX)) {

    this.form.errorMsgCN.innerText = "";
    this.form.customerMeal.style = "border-color: #2ecc71;";
    this.form.formMsg.style = "display: none";

}


/* MEAL Selection Check */
if(!Validator.validate(mealQty, Validator.DROP_BOX)){

    this.form.errorMsgCN.innerText = "Please choice your portion size.";
    this.form.mealQty.style = "border-color: #ff0000;";
    this.form.formMsg.style = "display: inline-block";

    return;

}else if(Validator.validate(mealQty, Validator.DROP_BOX)) {

    this.form.errorMsgCN.innerText = "";
    this.form.mealQty.style = "border-color: #2ecc71;";
    this.form.formMsg.style = "display: none";

}

this.form.orderChkbox.addEventListener("change", (event) => {
    if(event.target.checked){
        this.form.btnSubmit.setAttribute("disabled", "disabled");
    }
});


  const request = new XMLHttpRequest();

  request.onload = () => {

        let responseObject = null;
        // try {
        // responseObject = JSON.parse(request.responseText);
          // console.log(request.responseText);
         // } catch(e) {
          // console.error(e);
       //  }

          console.log("User input sent!")
          
          this.formDataDestroy();
          location.href = 'order-success.html';
    
  }

  
  let select = this.form.customerMeal;
  let selectValue = select.options[select.selectedIndex].text;
//Return the dropdown option TEXT
  console.log(selectValue);
// Return the dropdown option INDEX
  console.log(select.value);


  let requestData = `firstname=${this.form.firstname.value}`;
  requestData += `&surname=${this.form.surname.value}`;
  requestData += `&contact=${this.form.contact.value}`;
  requestData += `&mealType=${this.form.mealType.value}`;
  requestData += `&meal=${selectValue}`;
  requestData += `&mealQty=${this.form.mealQty.value}`;
  requestData += `&student-form=${this.form.studentYear.value}`;
  requestData += `&beverage=${this.form.customerBeverage.value}`;
  requestData += `&beverageQty=${this.form.beverageQty.value}`;
  requestData += `&order-comments=${this.form.customerComments.value}`;

  request.open('post', './mail.php');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(requestData);

  console.log(requestData);

    
    }
}

new UserInputForm();
// const form = {

//     firstname: document.getElementById("firstname"),
//     surname: document.getElementById("surname"),
//     contact: document.getElementById("contact"),
//     studentYear: document.getElementById("ddlStudent"),
//     mealType: document.getElementById("mealType"),
//     customerMeal: document.getElementById("ddlMeal"),
//     mealQty: document.getElementById("ddlMealQty"),
//     customerBeverage: document.getElementById("ddlBeverage"),
//     bevForm: document.getElementById("bevSelection"),
//     beverageQty: document.getElementById("ddlBevQty"),
//     bevSelectYes: document.getElementById("radioBevYes"),
//     bevSelectNo: document.getElementById("radioBevNo"),
//     customerComments: document.getElementById("usrComments"),
//     orderConf: document.getElementById("orderConf"),
//     btnSubmit: document.getElementById("btn-submit")
// }

// form.studentYear.value = "";
// form.customerBeverage.value = "";
// form.beverageQty.value = 0;
// form.customerComments.value = "";


// form.btnSubmit.addEventListener("click", () => {

     
//   const request = new XMLHttpRequest();

//   request.onload = () => {
//         let responseObject = null;
//          try {
        // responseObject = JSON.parse(request.responseText);
        //    console.log(request.responseText);
        //   } catch(e) {
        //    console.error(e);
        //  }

        // if(responseObject.ok){
        //   console.log("User input sent!")
         // location.href = 'order-success.html';
//          } 
  
//   }

  
//   let select = form.customerMeal;
//   let selectValue = select.options[select.selectedIndex].text;
//Return the dropdown option TEXT
//   console.log(selectValue);
// Return the dropdown option INDEX
//   console.log(select.value);


//   let requestData = `firstname=${form.firstname.value}`;
//   requestData += `&surname=${form.surname.value}`;
//   requestData += `&contact=${form.contact.value}`;
//   requestData += `&mealType=${form.mealType.value}`;
//   requestData += `&meal=${selectValue}`;
//   requestData += `&mealQty=${form.mealQty.value}`;
//   requestData += `&student-form=${form.studentYear.value}`;
//   requestData += `&beverage=${form.customerBeverage.value}`;
//   requestData += `&beverageQty=${form.beverageQty.value}`;
//   requestData += `&order-comments=${form.customerComments.value}`;


//   request.open('post', './mail.php');
//   request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//   request.send(requestData);

//   console.log(requestData);

    
// });
/* Order information contains the following attributes */
/*
    Customer Name - First & Last Name
    Contact Number - Mobile (Ideally)
    Academic Year - *this only applies to students
    Item Ordered - 
    # of Items Ordered -
    Beverage Ordered -
    # of Beverages Ordered -

*/


// form.orderConf.addEventListener("change", (event) => {
//     if(event.target.checked){
//       form.btnSubmit.removeAttribute("disabled");
//     } else { 
//       form.btnSubmit.setAttribute("disabled", "disabled");
//     }
  
//   });
  
//   form.bevSelectYes.addEventListener("click", () => {
//       form.bevForm.style = "display: inline-block";
//   });
  
//   form.bevSelectNo.addEventListener("click", () => {
//     form.bevForm.style = "display: none";
//   });
  