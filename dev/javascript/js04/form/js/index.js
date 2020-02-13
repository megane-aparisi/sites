'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/

//
/*let get_answers_form = document.getElementById('mon_form');

get_answers_form.addEventListener(`submit`, function(a){
  console.log(a);
  alert(`Vous avez envoyé votre formulaire, merci !`);
}); */

//reccueillir les valeurs
let get_answers_form = document.querySelector("form")
let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")

get_answers_form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(firstname.value + lastname.value + email.value)
});

//faire un href et l'empecher d'aller à la page indiquée

let lien = document.querySelector("a")
lien.addEventListener("click", function(event) {
  event.preventDefault()
});

//faire un objet

let objet = {
  nom: "aparisi",
  prenom: "megane",
  age: "27",
  phrase: function(){
    return this.nom + this.prenom + this.age}
}

console.log(objet.phrase())
