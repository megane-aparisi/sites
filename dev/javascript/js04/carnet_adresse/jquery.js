$contacts = [];
$contactList = $('.contactLists');
$form = $("form");

$('#toolbartoggle').click(function(e){
  e.preventDefault();
  $('#toolbar').fadeToggle('fast');
});

$form.submit(function(e){
  e.preventDefault();


  $newcontact = {
    "firstname": $('#firstname').val(),
    "lastname": $('#lastname').val(),
    "adress": $('#adress').val(),
    "codepostal": $('#codepostal').val(),
    "number": $('#number').val(),
    "email": $('#email').val(),
  };


  if(getContacts()) {
    $contacts = getContacts();
  }

  console.log($formEditState);

  if (!$formEditState) {
    $contacts.push($newcontact);

    localStorage.setItem('contact', JSON.stringify($contacts));
  } else {
    persistEditContact($newcontact);
  }



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
      <li><button class="editBtn" data-contact=${index}>Editer</button></li>
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
  deleteContact();
  editerContact();
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('contact'));
}

/*SUPPRIMER MON CONTACT*/
// function deleteContact(){
//   let supprimer = Array.from(document.getElementsByClassName('reset_btn'));
//   supprimer.forEach(function(button){
//     button.addEventListener('click', function(){
//       $index = $(button).data('contact');
//       $contacts = getLocalStorage();
//       $contacts.splice($index, 1);
//       localStorage.setItem('contact', JSON.stringify($contacts));
//       showUl($contact, index).remove();
//     });
//   });
// }

function deleteContact() {
  let supprimer = Array.from(document.getElementsByClassName('reset_btn'));
  supprimer.forEach(function(button) {
    button.addEventListener('click', function(){
      $index = $(this).data('contact');
      $contacts = getLocalStorage();
      $contacts.splice($index, 1);
      localStorage.setItem('contact', JSON.stringify($contacts));
      $(this).parent().parent().remove();
    });
  });
}

function editerContact() {
  let editer = Array.from(document.getElementsByClassName('editBtn'));

  editer.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      $formEditState = true;
      $index = $(this).data('contact');
      $contacts = getLocalStorage();
      $contact = $contacts[$index];

      $('#firstname').val($contact.firstname);
      $('#lastname').val($contact.lastname);
      $('#adress').val($contact.adress);
      $('#codepostal').val($contact.codepostal);
      $('#number').val($contact.number);
      $('#email').val($contact.email);
      $form.attr('data-contact', $index);
    });
  });
}

function persistEditContact($contact) {
      $contacts = getLocalStorage();
      $index = $form.attr('data-contact');
      let btns = Array.from($('.editBtn'));
      $contacts[$index] = $contact;

      localStorage.setItem('contact', JSON.stringify($contacts));

      btns.forEach(function(btn) {
        if($index == $(btn).attr('data-contact')) {
          $(btn).parent().parent().remove();
        }
      });

      $formEditState = false;
      showHtml($contact, $index);
}

document.addEventListener('DOMContentLoaded', function() {
  $formEditState = false;

  if(getContacts()) {
    $contacts = getContacts();
  }

  $contacts.forEach(($contact, index) => {
    showUl($contact, index);
  });

  deleteContact();
  editerContact();
});
