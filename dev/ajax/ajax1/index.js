
/*METHODES GET

document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();

  let xhttp = new XMLHttpRequest();

  let prenom = document.querySelector('#prenom').value;
  let nom = document.querySelector('#nom').value;
  // const data = {nom, prenom};
  const data = {
    prenom: prenom,
    nom: nom,
  };
  let url =  'getjason.php?query=' + data.prenom + '&nom=' + data.nom;
  xhttp.open('GET',url, true);

  xhttp.send();

  xhttp.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      console.log(xhttp.response);
      let response = JSON.parse(xhttp.response);

      document.getElementById('response').innerHTML =
      response.results.status + '' + response.results.prenom;
    }
  };
});
*/


document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();

  let prenom = document.querySelector('#prenom').value;
  let nom = document.querySelector('#nom').value;
  // const data = {nom, prenom};
  const data = {
    prenom: prenom,
    nom: nom,
  };

   $.get(
     'getjason.php',
     {
       query: data.prenom,
     },
     function(data){
       document.getElementById('response').innerHTML = data.results.status;
     }
   );
});


/*METHODES POST*/
/*
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();

  let xhttp = new XMLHttpRequest();

const form = document.querySelector('form');
const formData = new FormData(form);


  xhttp.open('POST', 'postjason.php');
  xhttp.send(formData);

  xhttp.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      let response = JSON.parse(xhttp.response);

      document.getElementById('response').innerHTML =
      response.results.status;
    }
  };
});
*/
/*
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();

  let prenom = document.querySelector('#prenom').value;
  let nom = document.querySelector('#nom').value;
  // const data = {nom, prenom};
  const data = {
    prenom: prenom,
    nom: nom,
  };


  $.post(

    {
      url: 'postjason.php',
      data: data,
    },
    function(data){
      document.getElementById('response').innerHTML = data.results.status;
    }
  );
});
*/



document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();

  let prenom = document.querySelector('#prenom').value;
  let nom = document.querySelector('#nom').value;
  // const data = {nom, prenom};
  const data = {
    prenom: prenom,
    nom: nom,
  };

  $.ajax({
    url: 'getjason.php',
    type: 'GET',
    data: 'query=' + data.prenom,
    success: function(data){
      document.getElementById('response').innerHTML = data.results.status;
    }
  });
});
