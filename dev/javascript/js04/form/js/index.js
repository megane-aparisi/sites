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

let test = document.querySelector("form");

test.addEventListener("submit", function(event) {
    event.preventDefault();
    let input = test.querySelector("input");

    let text = document.querySelector("div");

    text.style.color = "red";
    text.innerText = `${input.value}`;
    console.log(text.innerText)
})
