// Déclaration de variables
let addition
let soust
let division
let mult
let puissance
let first_nb
let second_nb
let operation
let result


// Demande le premier chiffre à calculer
first_nb = parseFloat(window.prompt("Saisissez votre premier chiffre/nombre :"));
// Demande le deuxieme chiffre à calculer
second_nb = parseFloat(window.prompt("Saisissez votre second chiffre/nombre :"));
// Demande l'opération à effectuer
operation = window.prompt("Quelle opération souhaitez-vous effectuer ?");


if(isNaN(first_nb) || isNaN(second_nb)) {
    document.write("ceci n'est pas un chiffre mon pote !");
  }

if((second_nb == 0 && operation == "division") || (operation == "/" && second_nb == 0)) {
    document.write("une division avec un zéro ne marche pas mon con !");
  }



if((operation != "+") && (operation != "-") && (operation != "*") && (operation != "/") && (operation != "^")) {
    document.write("L'opérateur n'est pas correct");
  }

// Les opérations à effectuer en fonction de la réponse

/*
switch (operation) {
  case "addition":
  case "+":
  result = first_nb + second_nb;
  break;
  case "soustraction":
  case "-":
  result = first_nb - second_nb;
  break;
  case "division":
  case "/":
  result = first_nb / second_nb;
  break;
  case "multiplication":
  case "*":
  result = first_nb * second_nb;
  break;
  case "puissance":
  case "^":
  result = first_nb ** second_nb;
  break;
  default:
    document.write("<p>Erreur</p>");
    break;
}

document.write(result);
*/


if(operation == "addition" || operation == "+")
{
  addition = (first_nb + second_nb);
  document.write(addition);
}

else if (operation == "soustraction" || operation == "-")
{
  soust = (first_nb - second_nb);
  document.write(soust);
}

else if (operation == "division" || operation == "/")
{
  division = (first_nb / second_nb);
  document.write(division);
}

else if (operation == "multiplication" || operation == "*")
{
  mult = (first_nb * second_nb);
  document.write(mult);
}

else if (operation == "puissance" || operation == "^")
{
  mult = (first_nb ** second_nb);
  document.write(puissance);
}
