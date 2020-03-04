$('#toolbartoggle').click(function(e){
  e.preventDefault();
  $('#toolbar').fadeToggle('fast');
});

$("form").submit(function(e){
  e.preventDefault();
  $newcontact = {
    "firstname": $('#firstname').val(),
    "lastname": $('#lasttname').val(),
    "adress": $('#adress').val(),
    "codepostal": $('#codepostal').val(),
    "number": $('#number').val(),
    "email": $('#email').val(),
  };
  $storeContacts =[];

  $contacts = getLocalStorage();
  $contacts.push($newcontact);
  localStorage.setItem('contact', JSON.stringify($contacts));

});

function getLocalStorage(){
  let contacts = [];

  if (JSON.parse(localStorage.getItem('contact')) && JSON.parse(localStorage.getItem('contact')).length ){
    contacts = JSON.parse(localStorage.getItem('contact'));
  }
  return contacts;
}



function showHtml(){
$contacts = getLocalStorage();
$html = `
<ul>
<li>${newcontact.firstname}</li>
<li>${newcontact.lastname}</li>
<li>${newcontact.adress}</li>
<li>${newcontact.codepostal}</li>
<li>${newcontact.number}</li>
<li>${newcontact.email}</li>
</ul>
`
}
console.log(showHtml());
