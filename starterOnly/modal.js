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


