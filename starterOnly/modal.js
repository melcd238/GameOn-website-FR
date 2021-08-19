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
}



// Validation du formulaire en utilisant form de js
validationForm.addEventListener("submit", (e)=>{
  e.preventDefault();
 const inputFirst = document.querySelector('#first');
 const inputLast = document.querySelector('#last');
 const inputEmail = document.querySelector('#email');
 const inputBirthdate = document.querySelector('#birthdate');
 const inputQuantity = document.querySelector('#quantity');
 //const inputLocation = document.querySelectorAll('input');

 

 if(!inputFirst.value || !inputLast.value || !inputEmail.value || !inputBirthdate.value || !inputQuantity.value  ){
    alert("tous les champs doivent être remplis")
 } else {
    alert('ok!')
 }
 
  
})


