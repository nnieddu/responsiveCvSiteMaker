"use strict";

var colorEditMode = 1;
var colorWell;
var defaultColor = "#209934";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
//   console.log(targetClicked.target.style.color)
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  targetClicked.target.style.color = event.target.value;
}

function updateAll(event) {
  targetClicked.target.style.color = event.target.value;
}

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------
function doAction(action) {
  if (action === "Remove") {
    targetClicked.target.remove();
    if (!historySize) historySize++;
    return;
  }

  if (action === "Edit") {
    hiddenPannelOn();
  }

//   if (action === "txtColor") {
//     startup();
//   }
}
