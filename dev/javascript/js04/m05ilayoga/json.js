//JSON JavaScript Object Notation
let person = {
  "name" : "megane",
  "adress" : "rue jacques de la roque",
  "zipcode" : "13100",
  "city" : "Aix en Provence"
}

let person2 = {
  "name" : "Edwige",
  "adress" : "rue jean Peytral",
  "zipcode" : "13100",
  "city" : "Aix en Provence"
}

let person3 = {
  "name" : "Steph",
  "adress" : "rue machin chose",
  "zipcode" : "13100",
  "city" : "Aix en Provence"
}

let mes_personnes = [person, person2];
let me ='';


mes_personnes.push(person3);

if (localStorage.setItem('Person',JSON.stringify(mes_personnes))) {
  console.info(JSON.stringify(person));
} else{
  console.error('Error');
}


if (me = localStorage.getItem('Person')){
  console.log(JSON.parse(me));
}

let persons = localStorage.getItem('Person');
for (let person of JSON.parse(persons)) {
  console.log(person.name);
}
