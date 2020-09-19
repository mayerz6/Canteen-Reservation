const form = {
    firstname: document.getElementById("firsname"),
    surname: document.getElementById("surname"),
    contact: document.getElementById("contact"),
    form: document.getElementById("ddlStudent"),
    submit: document.getElementById("btn-submit")
};

form.submit.addEventListener("click", () => {
  console.log("Clicked!");
});