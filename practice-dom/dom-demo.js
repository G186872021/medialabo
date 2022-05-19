let ul = document.querySelector('ul');

let li;

li.textContent = 'アジア大陸'; 
ul.insertAdjacentElement('beforeend', li);

let eu = document.querySelector('li#EU');
eu.remove()