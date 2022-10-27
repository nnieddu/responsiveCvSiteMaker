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
const hiddenPannel = document.getElementById("hidden-panel");

const changePanSideBtn = document.getElementById("changePanSideBtn");

function init() {
  contextListener();
  clickListener();
  keyupListener();
  // mobileBtnListener();
  windowResizeListener(); // close ctx menu on windows resize
}

init();
