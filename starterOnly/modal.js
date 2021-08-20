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
const formData = document.querySelectorAll(".formData");
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

//close modal event(utilisation du forEach() en prévision de la fermeture de la modal de confirmation)
closeBtn.forEach((btn)=> btn.addEventListener("click",closeModal));

//close modal form
function closeModal(){
  modalbg.style.display = "none";
};

      

// Validation du formulaire en utilisant form de js
validationForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const selected = [...inputsLocation].some(inputLocation => inputLocation.checked);

 if(!inputFirst.value || !inputLast.value || !inputEmail.value || !inputBirthdate.value || !inputQuantity.value || !selected || inputCondition.checked == false){
     
  alert("Tous les champs doivent être remplis!")
   
 } else {
    alert('ok!')
 }
 
  
});


