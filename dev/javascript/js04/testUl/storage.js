const contacts = [
    {
        name: 'Laurent',
        email: 'laurent@gmail.com',
    },
    {
        name: 'megane',
        email: 'megane@gmail.com',
    },
    {
        name: 'flo',
        email: 'flo@gmail.com',
    },
];

const contact = {
    name: 'Mickey',
    email: 'Toto',
};

const contact2 = {
    name: 'Minnie',
    email: 'Toto',
};

const element = document.querySelector('#test');

const button = document.querySelector('button');

let htmlArray = [];

let html = '';

function makeUl(contact) {
    const ul = document.createElement('ul');
    ul.innerHTML = `<li>${contact.name}</li>
                <li>${contact.email}</li></ul>`;
               element.appendChild(ul);
}

contacts.forEach(function(contact) {
    makeUl(contact);
    htmlArray.push(contact);
});

localStorage.setItem('Contact', JSON.stringify(htmlArray));

element.innerHTML += html;

button.addEventListener('click', function(e) {
    let contacts = JSON.parse(localStorage.getItem('Contact'));
    contacts.push(contact);
    makeUl(contact);
});
