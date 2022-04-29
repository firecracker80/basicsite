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

function country () {

// greeting ();
let placePrompt = prompt("Welcome " + myUserName + "! Where have you traveled?");
console.log(placePrompt);
let place = ""
console.log(place.toLowerCase())
if (placePrompt === "dominican republic") {
       
    let response = prompt ("Where in DR did you go?");
   console.log (response.toLowerCase())
//   /
} else {
    let ask = prompt("How many countries have you visited?");
    console.log (ask);
    // let number = "";
    if (ask === "3") {
        let pic = ("<img src=\"bernard-hermant-sb2DvfqUtEQ-unsplash.jpg\">");
        //   return pic * 3
          document.write("<img id='pic' src=bernard-hermant-sb2DvfqUtEQ-unsplash.jpg>");
    }
    // for (i = 3; i = ask; i++) {
    //     if (i = ask) {
        
        //   let pic = ("<img src=bernard-hermant-sb2DvfqUtEQ-unsplash.jpg>");
        //   return pic * 3
        //   document.write("<img id='pic' src=bernard-hermant-sb2DvfqUtEQ-unsplash.jpg>");
        // }
    // }

    // document.write("<img id='pic'>" src="bernard-hermant-sb2DvfqUtEQ-unsplash.jpg"</img>");
    // alert("Awesome! I bet you had fun! Thanks for visiting my site.");
    }

    alert("Awesome! I bet you had fun! Thanks for visiting my site.");

document.write("<p id='person-name'>" + myUserName + "</p>");

}

country()

// let myPlace = place ()

// console.log (myPlace)