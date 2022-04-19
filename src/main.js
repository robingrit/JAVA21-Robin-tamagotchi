const img = document.querySelector("img");

import { Tamagochi } from "./modules/tamagotchi.js";

document.getElementById("name").addEventListener("click", start);
document.getElementById("happinesBtn").addEventListener("click", happines);
document.getElementById("hungerBtn").addEventListener("click", hunger);
const inputField = document.querySelector("input");
const select = document.querySelector("select");

function start() {
  // ändring tar input data när man klickar på knappen
  const tama = new Tamagochi(inputField.value, select.value);
  img.src = tama.whattype();
  tama.start();

  let creature = "  creature: " + select.value;
  let name = "Name: " + inputField.value + creature;

  document.querySelector("h2").innerHTML = name;
  document.getElementById("form").style.visibility = "hidden";
}
function hunger() {
  tama.feed();
}
function happines() {
  tama.giveLove();
}

var element = document.getElementById("poop");

poop.addEventListener("click", removePoop);
function removePoop() {
  let bild = element.querySelector("img");
  element.removeChild(bild);
}
