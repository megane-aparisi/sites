let person = {
  "firstname" : "Megane",
  "lastname" : "APARISI" ,
  "adress" : "Rue jacques de la roque",
  "codepostal" : "13100"
  "number" : "06 58 73 46 27"
  "email" : "monmail@gmail.com"
}

let person2 = {
  "firstname" : "Edwige",
  "lastname" : "BORIONNE" ,
  "adress" : "Avenue Jean Peytral",
  "codepostal" : "13100"
  "number" : "06 12 34 56 78"
  "email" : "monmail@gmail.com"
}

let mes_personnes = [person, person2];

if (localStorage.setItem('Person',JSON.stringify(mes_personnes))) {
  console.info(JSON.stringify(person));
} else{
  console.error('Error');
}
