"use strict";

function doAction(action) {
  if (action === "Remove") {
    console.log("REMOVE")
    targetClicked.target.remove();
    if (!historySize) 
      historySize++;
    return;
  }

  if (action === "Edit") {
    toggleHiddenPannel();
  }

  // if (colorEditMode) startup();

  if (action === "txtColor") {
    document.body.style.cursor = "url(./../../cursor.svg) 4 12, auto";
    startup();
  }
}
