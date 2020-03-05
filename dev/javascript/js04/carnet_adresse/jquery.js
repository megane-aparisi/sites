$contacts = [];
$contactList = $('.contactLists');

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



  if(getContacts()) {
    $contacts = getContacts();
  }

  $contacts.push($newcontact);

  localStorage.setItem('contact', JSON.stringify($contacts));


  showUl($newcontact, $contacts.length - 1);

  $('form').trigger('reset');
});


//Créer ma liste
let html = '';
function showHtml(contact, index) {
  html = `
      <li>${contact.firstname}</li>
      <li>${contact.lastname}</li>
      <li>${contact.adress}</li>
      <li>${contact.codepostal}</li>
      <li>${contact.number}</li>
      <li>${contact.email}</li>
      <li><button data-contact=${index}>Editer</button></li>
      <li><button class="reset_btn" data-contact=${index}>Supprimer</button></li>
    </ul>
  `;

  return html;
}

//Récupère mes contact et les affiche dans ma liste
function getContacts() {
  $contacts = [];
  if (getLocalStorage() != null) {

    $contacts = getLocalStorage();

    return $contacts;
  }
}

function showUl($contact, index) {
  let ul = document.createElement('ul');
  ul.innerHTML = showHtml($contact, index);

  $contactList.append(ul);
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('contact'));
}

/*SUPPRIMER MON CONTACT*/
function deleteContact(){
  let supprimer = Array.from(document.getElementsByClassName('reset_btn'));
  supprimer.forEach(function(button){
    button.addEventListener('click', function(){
      $index = $(button).data('contact');
      $contacts = getLocalStorage();
      $contacts.splice($index, 1);
      localStorage.setItem('contact', JSON.stringify($contacts));
    });
  });
}


document.addEventListener('DOMContentLoaded', function() {

  if(getContacts()) {
    $contacts = getContacts();
  }

  $contacts.forEach(($contact, index) => {
    showUl($contact, index);
  });

 deleteContact();

});
