function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const confirmModal = document.querySelector("#confirmModal")
const modalBtn = document.querySelectorAll(".modal-btn");
const formDatas = document.querySelectorAll(".formData");
   // DOM Elements add 
const closeBtn = document.querySelectorAll(".close"); 
const validationForm = document.querySelector('#validation')
const btnClose = document.querySelector(".btn-close")
   // DOM Elements Form
const inputFirst = document.querySelector('#first'); // doit être en lettre min ou maj et minlengt=2
const inputLast = document.querySelector('#last');  // doit être en lettre min ou maj et minlengt=2
const inputEmail = document.querySelector('#email');// a verifier avec regex email
const inputBirthdate = document.querySelector('#birthdate');//requis
const inputQuantity = document.querySelector('#quantity');//valeur numérique entre 0 et 99
const inputsLocation = document.querySelectorAll('input[name="location"]')//Une ville doit être selectionnée pour la validation du formulaire.
const inputCondition = document.querySelector('input[name="checkbox1"]')// condition doit être selectionnée 


let formIsValid = false;
  
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event: utilisation du forEach() en prévision de la fermeture de la modal de confirmation
closeBtn.forEach((btn)=> btn.addEventListener("click",closeModal));

//close modal form
function closeModal(){
  modalbg.style.display = "none";
  confirmModal.style.display = "none";
  document.location.reload()
};

// close modal confirm with btn-close;
btnClose.addEventListener("click", ()=>{
  confirmModal.style.display = "none";
  document.location.reload()
})

// Function to check validity of inputs :
function checkValidityInput(){
  const hasError = [];
  const regexFirstLast = /^([a-zA-Z-\s]){2,30}$/;
  const regexMail =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const regexQuantity =/^[0-9][0-9]?$|^99$/;
  const selectedTown =  [...inputsLocation].some(inputLocation => inputLocation.checked)

// inputFirst validity:
if(!inputFirst.value || regexFirstLast.test(inputFirst.value) ==false){
    formDatas[0].dataset.errorVisible = "true";
    hasError.push(true)
}else{
 formDatas[0].dataset.errorVisible = "false";
}

// inputLast validity:
if(!inputLast.value || regexFirstLast.test(inputLast.value) ==false){
  formDatas[1].dataset.errorVisible = "true";
  hasError.push(true)
 }else{
  formDatas[1].dataset.errorVisible = "false";
}

// Validation inputEmail:
  if(!inputEmail.value ||regexMail.test(inputEmail.value) == false){
   formDatas[2].dataset.errorVisible = "true";
   hasError.push(true)
   }else{
   formDatas[2].dataset.errorVisible = "false";
 }

// Validation inputBirthDate:
   if(!inputBirthdate.value || isNaN(Date.parse(inputBirthdate.value))) {
    formDatas[3].dataset.errorVisible = "true";
    hasError.push(true)
   }else{
    formDatas[3].dataset.errorVisible = "false";
  }

// Validation inputQuantity:
   if(!inputQuantity.value || regexQuantity.test(inputQuantity.value) == false){
        formDatas[4].dataset.errorVisible = "true";
        hasError.push(true)
  }else{
        formDatas[4].dataset.errorVisible = "false";
  }
  
// Validation selectedTown:
   if(!selectedTown ){
      formDatas[5].dataset.errorVisible = "true";
      hasError.push(true)
  }else{
      formDatas[5].dataset.errorVisible = "false";
  }
  
// Validation inputCondition:
   if(inputCondition.checked == false ){
      formDatas[6].dataset.errorVisible = "true";
      hasError.push(true)
   }else{
     formDatas[6].dataset.errorVisible = "false";
  } 

  if(hasError.length > 0){
    return formIsValid = false;
  }else{
    return formIsValid = true;
  }

   
}
    

// Validation du formulaire: 
validationForm.addEventListener("submit", (e)=>{
  
  checkValidityInput();
  e.preventDefault();
  if(formIsValid){
    modalbg.style.display = "none";
    confirmModal.style.display = "block";
  }
  
  
});




