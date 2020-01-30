let voiture = {
  marque: "Renault",
  year_fab: new Date('2010-01-01'),
  year_pur: new Date('2020-01-01'),
  passengers: ["Anne", "Cindy", "Megane"]
}


document.write ("<ul>");
document.write (`<li>${voiture.marque}</li>`);
document.write (`<li>${voiture.year_fab}</li>`);
document.write (`<li>${voiture.year_pur}</li>`);
document.write (`<li>${voiture.passengers}</li>`);
document.write ("</ul>");

/*OU*/

document.write (`<ul>`);
document.write ('<li>' + voiture.marque + '</li>' + '<li>' + voiture.year_fab + '</li>'+ '<li>' + voiture.year_pur + '</li>' + '<li>' + voiture.passengers + '</li>');
document.write (`</ul>`);


/*échapper les caractères:
let phrase3 = 'j\'étais la !;
let phrase4 = "je cite \"citation\" ";


let voiture = {
	marque: "renault",
    passagers: []
}

*/
