document.addEventListener('DOMContentLoaded', function() {

    $showFormButton.click(function() {
        form.toggle('slow');
        htmlObj.resetformstate();
        // text du bouton
        setTimeout(function() {
            form.css('display') == 'none'
                ? $showFormButton.text('Ajouter un contact')
                : $showFormButton.text('Cacher');
        }, 700);
    });

    // Bouton annuler
    $('#cancel').on('click', function() {
        htmlObj.resetformstate();
        form.hide('slow');
        $showFormButton.text('Ajouter un contact');
    });

    // bouton pour effacer tous les contacts.
    $('#js-clear-storage').on('click', function() {
        localstorageObj.deleteContactFromLocalStorage(key);
        $contactList.html($initialAppMessage);
    });

    // Afficher les contacts si il y en a, sinon un message.
    contactObj.showContactsOrMessage();
});

form.on('submit', function(e) {
    e.preventDefault();

    // La methode .serializeArray formate automatiquement
    // les donnees du formulaire sous forme de tableau
    // compose d'objets qui represente chaque input du formulaire. (name et value)
    const contact = $(this).serializeArray();
    const contact2 = $(this).serialize();
    // $(this).serialize();
    console.log(contact);
    console.log(contact2);
    for (let field of contact) {
        if (field.value == '') {
            $contactList
                .parent()
                .prepend(
                    `<p id="error-message">${field.name} is empty: ${emptyContactMessage}</p>`
                );
            return setTimeout(function() {
                $('#error-message').remove();
            }, 5000);
        }
    }

    if ($formUpdateState) {
        $index = $(this).attr($dataAttrName);
        return localstorageObj.persistUpdate(contact, $index);
    }

    return contactObj.insertNewContact(contact);
});
