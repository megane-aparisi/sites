'use strict'

/*
    Quand on clique sur un élément de la liste *photo-list*, l'élément en question se voit affecter la class *selected* et le message avec le nombre de photos sélectionnées se met à jour. Un deuxième clic inverse l'opération.
*/


let ul = document.getElementById("photolist");
let li = document.querySelectorAll("li");
let total = document.getElementById("total");
let selection = document.querySelectorAll(".selected");
let em = total.firstElementChild;
let ulchild = ul.children;

for (let i = 0; i < li.length; i++) {

  li[i].addEventListener("click", function() {

    if(this.classList.contains("selected")) {
      em.innerText = document.querySelectorAll(".selected").length -1;
      return this.classList.remove("selected");

    }
    this.classList.add("selected");
    em.innerText = document.querySelectorAll(".selected").length;
  });

}

for (let i = 0; i < li.length; i++) {

  li[i].addEventListener("mouseenter", function() {

    this.classList.add("silver");

  });

  li[i].addEventListener("mouseout", function() {

    this.classList.remove("silver");

  });

}
