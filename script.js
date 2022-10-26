"use strict";

const contextMenuLinkClassName = "context-menu-action";
const contextMenuActive = "context-menu-active";
const contextContainerClassName = "context-menu";
const menu = document.querySelector("#context-menu");
let menuState = 0;

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
