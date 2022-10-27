"use strict";

let targetClicked;

let history;
let historyPath;
let historySize = 0;

let editState = 0;

let spaceNeeded = 0;

let removeBtnState = 0;

const cursorBtn = document.querySelector("#cursorBtn");
const removeBtn = document.querySelector("#removeBtn");
const editBtn = document.querySelector("#editBtn");
const colorPickBtn = document.querySelector("#colorPickBtn");

function init() {
  contextListener();
  clickListener();
  keyupListener();
  mobileBtnListener();
  windowResizeListener(); // close ctx menu on windows resize
}

init();
