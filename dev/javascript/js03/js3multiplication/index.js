/*
Énoncé

Construire une table des multiplications en JavaScript puis l'afficher en HTML.
Détails

    Demander à l'utilisateur de saisir la taille de la table des multiplications (exemple : si on saisit 10 il faut faire une table de 1 à 10).
    Il faut utiliser les balises HTML de tableaux pour construire l'affichage.
    Pour l'affichage, lorsque le nombre est multiplié par lui-même (1x1, 2x2, 3x3, etc.), la cellule du tableau HTML doit s'afficher d'une autre couleur que les autres cellules. La solution doit être en CSS.

Rappels

    Rien de mieux qu'une boucle pour initialiser un tableau...

*/


let user = (window.prompt(`Quelle taille de table de multiplication souhaitez-vous ?`));

while (isNaN(user) == true)
{
user = (window.prompt(`Quelle taille de table de multiplication souhaitez-vous ?`));
}

document.write(`<table>`);

  for (let i = 1; i <= user; i++) {

    document.write(`<tr>`);

      for (let j = 1; j <= user; j++) {
        if ((i == j) || (j == i)) {
         document.write(`<td class="diag"> ${i*j} </td>`);
        } else {
          document.write(`<td> ${i*j} </td>`);
        }
    }
    document.write(`</tr>`);
  }

document.write(`</table>`);
