/*
function test() {
    console.log('hover');
}
div.addEventListener('mouseover', test);div.addEventListener('mousemove', function() {
    console.log('hover');
});div.addEventListener('mouseenter', function() {
    console.log('mouse enter');
});div.addEventListener('mouseout', function() {
    console.log('mouse out');
});div.addEventListener('click', function() {
   console.log('click');
});
*/

//Quand on clique sur le bouton toggle-rectangle, cela cache ou affiche le rectangle.

let toggle = document.getElementById("toggle-rectangle");
let rectangle = document.getElementById("rectangle");

toggle.addEventListener("click", () => {
  if(getComputedStyle(rectangle).display != "none"){
    return rectangle.style.display = "none";
  }

  rectangle.style.display = "block";

});

//Quand la souris se déplace à l'intérieur du rectangle il devient rouge; il reprend sa couleur originale quand la souris n'est plus dedans.

rectangle.addEventListener("mouseenter", () => {
  rectangle.style.backgroundColor = "red";
});

rectangle.addEventListener("mouseout", () => {
  rectangle.style.backgroundColor = "";
});

//  Quand on double-clique sur le rectangle il devient vert.

rectangle.addEventListener("dblclick", () => {
   rectangle.style.backgroundColor = "green";
});
