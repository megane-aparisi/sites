'use strict';

/*Enoncé

Demander à l'utilisateur de saisir obligatoirement un nombre quoiqu'il arrive, afficher ce nombre ensuite en HTML.

On peut saisir un nombre entier comme un nombre à virgule.
*/

//déclaration de variables
let user

user = parseFloat(window.prompt("Merci de renseigner un nombre (obligatoire) :"));

while (isNaN(user) == true)
{
  user = parseFloat(window.prompt("Merci de renseigner un nombre (obligatoire) :"));
}

document.write(user);
