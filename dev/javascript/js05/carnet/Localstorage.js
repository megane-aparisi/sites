class Localstorage{
   persistUpdate(contact, index) {
      let contacts = localstorageObj.getFromLocalStorage(key);
      contacts[index] = contact;

      localstorageObj.addToLocalStorage(key, contacts);

      let uls = Array.from($('ul'));

      htmlObj.updateHTML(uls, index, contact);

      form.trigger('reset');
      form.hide('slow');
      $formUpdateState = false;
      htmlObj.setShowFormButtonText();
  }

   resetListsDataAttr() {
      let contacts = localstorageObj.getFromLocalStorage(key);

      let uls = Array.from($('ul'));

      for (let i = 0; i < contacts.length; i++) {
          $(uls[i]).attr($dataAttrName, i);
      }
  }

   addToLocalStorage(key, items) {
      return localStorage.setItem(key, JSON.stringify(items));
  }

   getFromLocalStorage(key) {
      return JSON.parse(localStorage.getItem(key));
  }

   deleteContactFromLocalStorage(key) {
      return localStorage.removeItem(key);
  }

}
