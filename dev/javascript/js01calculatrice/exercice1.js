

/* let user = window.prompt("Saisissez votre montant HT");
let ht = user;
const TVA = (1 + (20/100));
let ttc =  ht * TVA;
document.write("Le montant hors taxe renseigné est de " + ht + ", la TVA est de 20%" + " donc le montant TTC est de " + ttc +"."); */

let ht = window.prompt("Saisissez votre montant HT");
ht = parseFloat(ht);

/*
 * Les deux lignes du dessus peuvent être réduites également en une seule :
 * let ht = parseFloat(window.prompt('Quel est le montant HT ?'));
 *
 * Le code se lit et s'exécute de l'intérieur des parenthèses vers l'extérieur.
 */

const TVA = 20;
let montantTVA = ht * TVA / 100;
let ttc = ht + montantTVA;
ttc = ttc.toFixed(2);
document.write("Le montant hors taxe renseigné est de " + ht + ", la TVA est de " + TVA + "%" + " donc le montant TTC est de " + ttc +".");
