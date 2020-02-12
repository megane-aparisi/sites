/*
Enoncé

Gérer une liste de courses en affichant les informations dans la console du navigateur web.
Détails

    La liste de courses est stockée dans une seule variable.
    Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
    Les fonctionnalités de gestion de la liste de courses sont :
        Ajouter un produit par son nom
        Supprimer un produit ayant un nom spécifique
        Supprimer tous les produits
        Afficher la taille et le contenu de la liste
    Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
    Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités
    Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
        Ajouter 4 produits simples puis afficher les informations
        Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
        Supprimer tous les produits puis afficher les informations
*/

'use strict';

const purchase_list = [];

function add_product(objet){
  purchase_list.push(objet);
}


function delete_item(list, item){
  let position =  list.indexOf(item.toLowerCase());
  let deleteoneitem = list.splice(position, 1);
  if (position == -1) {
    document.write("Cet élément à supprimer n'existe pas")
  }
  /*
Autre façon de faire :
  for (let i = 0; i < purchase_list.length; i++) {
    if (purchase_list[i] == item){
    purchase_list.splice(i, 1);

    }
  }*/
}


function delete_all_items() {
  purchase_list.length = 0;
}

function showlist(list) {
  document.write(`<ul>`);
  for (let i = 0; i < list.length; i++) {
    document.write(`<li>${list[i]}</li>`);
  }
  document.write(`</ul>`);
}


add_product("banane");
add_product("chocolat");
add_product("fraise");
add_product("vanille");
delete_item(purchase_list, "BANANE");
/*delete_all_items();*/
showlist(purchase_list);
console.log(purchase_list);
