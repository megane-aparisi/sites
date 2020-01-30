'use strict';

let ht = window.prompt("Saisissez votre montant HT");
ht = parseFloat(ht);

let remise = window.prompt("Souhaitez-vous une remise ?", "yes");

const TVA = 20;
let pourc_remise = 10;
let montantrem = (pourc_remise / 100) * ht;
let htremise = ht - montantrem;
let montantTVArem = htremise * (TVA / 100);
let ttcrem = htremise + montantTVArem;


let montantTVA = ht * (TVA / 100);
let ttc = ht + montantTVA;
ttc = ttc.toFixed(2);

if (remise == "yes" || remise == "oui") {
 document.write(ttcrem);
} else {
  document.write(ttc);
}
