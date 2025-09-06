let title = document.createElement('h1');
title.innerHTML = 'DOM Manipulation Task';
let divOne = document.createElement('div');
let pOne = document.createElement('p');
let pTow = document.createElement('p');
let pThree = document.createElement('p');
let ul = document.createElement('ul');
let itemOne = document.createElement('li');
let itemTow = document.createElement('li');
let styleBody = document.createElement('style');
pOne.innerText = 'Uploaded Box 1';
pTow.innerText = 'Uploaded Box 2';
pThree.innerText = 'Uploaded Box 3';
itemOne.innerText = 'item 1';
itemTow.innerText = 'item 2';
pOne.setAttribute("class", "first");
styleBody.innerHTML=
  " p { background-color: #abe6ff; border: 5px solid blue; padding: 20px;} .first {background-color: #b8eb8f;}"
;

divOne.appendChild(pOne);
divOne.appendChild(pTow);
divOne.appendChild(pThree);
ul.appendChild(itemOne);
ul.appendChild(itemTow);

document.body.appendChild(title);
document.body.appendChild(divOne);
document.body.appendChild(ul);

document.head.appendChild(styleBody);