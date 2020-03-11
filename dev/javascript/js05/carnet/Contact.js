class Contact {

   createContactList(contacts) {
      contacts.forEach(function(contact, index) {
          htmlObj.generateHTML(contact, index);
      });
  }

   showContactsOrMessage() {
      let contacts = localstorageObj.getFromLocalStorage(key);

      if (contacts === null || contacts.length === 0) {
          return $contactListDiv.html($initialAppMessage);
      }
      contactObj.createContactList(contacts);

      return htmlObj.addEventAndTextToCreatedContacts();
  }

   insertNewContact(contact) {
      let contacts = [];
      if (localstorageObj.getFromLocalStorage(key) !== null) {
          contacts = localstorageObj.getFromLocalStorage(key);
      }

      contacts.push(contact);
      localstorageObj.addToLocalStorage(key, contacts);
      $formUpdateState = false;
      htmlObj.generateHTML(contact, contacts.length - 1);

      form.trigger('reset');
      form.hide('slow');
      htmlObj.setShowFormButtonText();
  }

   updateContact() {
      $formUpdateState = true;
      form.show('slow');

      let index = $(this)
          .parent()
          .attr($dataAttrName);

      let contacts = localstorageObj.getFromLocalStorage(key);

      for (let field of contacts[index]) {
          $(`input[name=${field.name}]`).val(field.value);
      }

      form.attr($dataAttrName, index);
  }

   deleteContact() {
      let index = $(this)
          .parent()
          .parent()
          .attr($dataAttrName);

      let contacts = localstorageObj.getFromLocalStorage(key);

      contacts.splice(index, 1);

      localstorageObj.addToLocalStorage(key, contacts);

      $(this)
          .parent()
          .parent()
          .remove();

      localstorageObj.resetListsDataAttr();

      if ($('ul').length == 0) {
          $contactList.html($initialAppMessage);
      }
  }
}
