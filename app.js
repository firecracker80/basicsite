'use strict'

let userName = prompt("What is your name?");
console.log(userName);

let place = prompt("Welcome " + userName + "! Where have you traveled?");
console.log(place);

let response = prompt("Awesome! I bet that was fun! Thanks for visiting my site.");
console.log(response);

document.write("<p id='person-name'>" + userName + "</p>");