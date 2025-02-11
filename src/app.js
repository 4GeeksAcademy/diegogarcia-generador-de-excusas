import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'Julio', 'The neighbor', 'My dentist', 'Roger', 'The King'];
let action = ['ate', 'peed', 'crushed', 'broke', 'stole', 'burned', 'hid'];
let what = ['my homework', 'my phone', 'the car', 'my teeth', 'my house'];
let when = ['before the class', 'when I was fighting against monkey', 'while I was dancing', 'during my code class', 'while I was praying'];


function getRandomNumber (a,b){
  return Math.floor(Math.random() * (b-a) + a);
}



function getRandom (anyArray){
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber (max,min);
  return anyArray[random]
}


window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector('#excuse').innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what)  + " " + getRandom(when)
  document.querySelector('#arriba').innerHTML = "Mmm... It isnt an excuse but..."
};
