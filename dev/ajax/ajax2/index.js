$form = $('form');

$form.on('submit', function(e) {

  $value = $('input[name=choice]:checked').val();

  $url = getTheGoodUrl($value);

  sendRequest(e, $url, $value);

});

function sendRequest(e, url, value) {
  e.preventDefault();


  //Affiche HTML
  $.ajax({
    url: url,
    type: 'GET',
    success: function(data){
       trier(value, data);
    }
  });
}

function getTheGoodUrl(value) {
  let url = 'contentjson.php';

  if (value === 'htmlContent') {
    url = 'contenthtml.php'
  }

  if (value === 'movieContent') {
    url = 'contentmovie.php'
  }

  return url;
}


function trier(value, data) {

    if (value == "htmlContent") {
      return document.getElementById('response').innerHTML = data;
    }

    if (value == "jsonContent") {

      return  document.getElementById('response').innerHTML = `<p>${data.nom}</p> <p>${data.phone}</p> <p>${data.adress}</p>` ;
    }

    return document.getElementById('response').innerHTML = data;
}
