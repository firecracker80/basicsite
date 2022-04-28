'use strict'

function greeting () {

let userName = "";
let userPrompt = prompt("What is your name?");
console.log(userName);
userName += userPrompt
return userName;

}

// let myUserName = greeting ()

// console.log (myUserName)
let myUserName = greeting ()

function place () {

// greeting ()
let place = prompt("Welcome " + myUserName + "! Where have you traveled?");
console.log(place);

if (place === "Dominican Republic") {
   let response = prompt ("Where in DR did you go?");
   console.log (response)
   alert("Awesome! I bet that was fun! Thanks for visiting my site.");
}
else {
    alert("Awesome! I bet that was fun! Thanks for visiting my site.");
    }

// alert("Awesome! I bet that was fun! Thanks for visiting my site.");

document.write("<p id='person-name'>" + myUserName + "</p>");

}

place ()

// let myPlace = place ()

// console.log (myPlace)