"use strict";

let targetClicked;

let history;
let historyPath;
let historySize = 0;

let spaceNeeded = 0;


let editState = 0;
let removeState = 0;

const cursorBtn = document.querySelector("#cursorBtn");
const removeBtn = document.querySelector("#removeBtn");
const editBtn = document.querySelector("#editBtn");
const colorPickBtn = document.querySelector("#colorPickBtn");
const hiddenPannel = document.getElementById("hidden-panel");

const changePanSideBtn = document.getElementById("changePanSideBtn");

function init() {
  contextListener();
  clickListener();
  keyupListener();
  mobileBtnListener();
  windowResizeListener(); // close ctx menu on windows resize
}


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
} 

init();
