class Html{
   generateHTML(contact, index) {
      const ul = document.createElement('ul');

      ul.classList.add(
          'list-group',
          'col-md-4',
          'contact-list',
          'mb-10',
          'mt-10'
      );

      $(ul).attr($dataAttrName, index);

      for (let field of contact) {
          ul.innerHTML += `
              <li class="list-group-item" data-${field.name}="${field.name}">
                  <strong>${field.name}:</strong> ${field.value}
              </li>
          `;
      }

      if ($contactList.html() == $initialAppMessage) {
          $('.text-danger').remove();
      }

      ul.appendChild(htmlObj.addDeletebutton());

      $contactList.append(ul);
      htmlObj.addEventAndTextToCreatedContacts();
  }

   updateHTML(uls, index, contact) {
      uls.forEach(function(ul) {
          if ($(ul).attr($dataAttrName) == index) {
              htmlObj.updateList(ul, contact);
          }
      });
  }

   updateList(ul, contact) {
      let lis = Array.from($(ul).children());
      lis.forEach(function(li) {
          htmlObj.updateMatchingListFields(li, contact);
      });
  }

   updateMatchingListFields(li, contact) {
      for (let field of contact) {
          if (field.name == $(li).data(field.name)) {
              return $(li).html(`<strong>${field.name}:</strong> ${field.value}`);
          }
      }
  }

   addEventAndTextToCreatedContacts() {
      $('li:first-child').on('click', contactObj.updateContact);
  }

   setShowFormButtonText() {
      $showFormButton.text('Ajouter un contact');
  }

   addDeletebutton() {
      const li = document.createElement('li');
      const button = document.createElement('button');
      li.classList.add('list-group-item');
      button.classList.add('btn', 'btn-xs', 'btn-danger', 'delete-contact');
      button.innerText = 'Effacer';
      li.append(button);
      $(button).on('click', contactObj.deleteContact);
      return li;
  }

  resetformstate(){
    form.trigger('reset');
    $formUpdateState = false;
  }

}
