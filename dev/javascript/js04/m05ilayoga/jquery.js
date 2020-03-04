$email = $('#email');
$lastname = $('#lastname');
$firstname = $('#firstname');

let firstname = document.querySelector('#firstname');

// $firstname.fadeOut();
// $firstname.fadeOut('slow');
// $firstname.fadeOut('fast');
// $firstname.fadeOut(2000);
//
// $firstname.fadeIn();
// $firstname.fadeIn('slow');
// $firstname.fadeIn('fast');
// $firstname.fadeIn(2000);
//
// $firstname.fadeToggle('slow');
// $firstname.fadeToggle(3000);
//
// // en JS on ecrit : firstname.value;  Alors qu'en Jquery
// $firstname.val();
// $('#firstname').val();
// $('#firstname')fadeOut(5000).fadeIn(6000);


$('.send_btn').on('click', function(e){
  e.preventDefault();
  $('#lastname').fadeOut(5000).fadeIn(6000);
  console.log($lastname.val());
});

// méthodes les plus courantes de jquery
//
// $('selectionner'), text(), html(), attr(), data(),AddClass(), removeClass(), toggleClass(), hasClass(), css(), on(), append(), appendTo()


$('.send_btn').on('click', function(e){
  e.preventDefault();
  console.log(this);
  console.log($(this));
  console.log(e.target);
  console.log(e.target.getAttribute('type'));
  console.log(this.getAttribute('type'));
  console.log($(e.target).attr('type'));
  console.log($(this).attr('type'));
});
