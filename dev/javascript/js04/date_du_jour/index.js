'use strict';

  let jour =["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  let mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novemebre", "décembre"];
  let date = new Date();
  let message = jour[date.getDay()] + " ";
  message += date.getDate() + " ";
  message += mois[date.getMonth()] + " ";
  message += date.getFullYear();

let p = document.getElementById("message");
p.innerText = "Aujourd'hui nous sommes le " + message;
