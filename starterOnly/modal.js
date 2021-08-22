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
const modalBtn = document.querySelectorAll(".modal-btn");
const formDatas = document.querySelectorAll(".formData");
   // DOM Elements add 
const closeBtn = document.querySelectorAll(".close"); 
const validationForm = document.querySelector('#validation')
   // DOM Elements Form
const inputFirst = document.querySelector('#first'); // doit être en lettre min ou maj et minlengt=2
const inputLast = document.querySelector('#last');  // doit être en lettre min ou maj et minlengt=2
const inputEmail = document.querySelector('#email');// a verifier avec regex email
const inputBirthdate = document.querySelector('#birthdate');//requis
const inputQuantity = document.querySelector('#quantity');//valeur numérique entre 0 et 99
const inputsLocation = document.querySelectorAll('input[name="location"]')//Une ville doit être selectionnée pour la validation du formulaire.
const inputCondition = document.querySelector('input[name="checkbox1"]')// condition doit être selectionnée 

   
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
};

// Function to use dataset in formdata: 
formDatas.forEach(formData => formData.addEventListener("input",()=>{
  const regexFirstLast = /^([a-zA-Z-\s]){2,30}$/;
  const regexMail =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const regexQuantity =/^[0-9][0-9]?$|^99$/;
  
  if(!inputFirst.value || regexFirstLast.test(inputFirst.value) ==false){
     formDatas[0].dataset.errorVisible = "true";
     
  }else{
    formDatas[0].dataset.errorVisible = "false";
  }
  if(!inputLast.value || regexFirstLast.test(inputLast.value) ==false ){
   
    formDatas[1].dataset.errorVisible = "true";
  }else{
    formDatas[1].dataset.errorVisible = "false";
  }
  if(!inputEmail.value ||regexMail.test(inputEmail.value) == false ){
    formDatas[2].dataset.errorVisible = "true";
  }else{
    formDatas[2].dataset.errorVisible = "false";

  }
  if(!inputBirthdate.value){
    formDatas[3].dataset.errorVisible = "true";
  }else{
    formDatas[3].dataset.errorVisible = "false";
  }
  if(!inputQuantity.value || regexQuantity.test(inputQuantity.value) == false){
    formDatas[4].dataset.errorVisible = "true";
  }else{
    formDatas[4].dataset.errorVisible = "false";
  }

}));

let formIsValid = false;



  
//const regexFirstLast = /^([a-zA-Z-\s]){2,30}$/;
//const regexMail =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//const regexQuantity =/^[0-9][0-9]?$|^99$/;
//const regexbirthDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
 







    

// Validation du formulaire: 
validationForm.addEventListener("submit", (e)=>{
   
  const selectedTown =  [...inputsLocation].some(inputLocation => inputLocation.checked)
  const regexFirstLast = /^([a-zA-Z-\s]){2,30}$/;
  const regexMail =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const regexQuantity =/^[0-9][0-9]?$|^99$/;  
  

  if(!inputFirst.value || !inputLast.value || !inputEmail.value || !inputBirthdate.value || !inputQuantity.value || !selectedTown || inputCondition.checked == false){
    e.preventDefault();
  alert("Tous les champs doivent être remplis, une ville doit être selectionné et les conditions d'utlisation checkés!")
       
      }else if(regexFirstLast.test(inputFirst.value) ==false || regexFirstLast.test(inputLast.value) ==false  ){
        e.preventDefault();
       
       alert('Ce champs doit comporté au moins 2 lettres, et aucun chiffre')
        
      }else if(regexMail.test(inputEmail.value) == false){
        e.preventDefault();
        alert("Ce champs doit être de type email")
       
       
      }
      else if(regexQuantity.test(inputQuantity.value) == false){
        e.preventDefault();

        alert("vous devez choisir un nombre entre 0 et 99")
        

      }
 
 else {
  
    alert('ok!')
 }
 
  
});


