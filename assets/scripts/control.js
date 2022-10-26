"use strict";

function doAction(action) {
  if (action === "Remove") {
    targetClicked.target.remove();
    if (!historySize) historySize++;
    return;
  }
  if (action === "Edit") {
    editState = 1;
    // targetClicked.srcElement.style.color = "red";
    targetClicked.srcElement.style.backgroundColor =
      "rgba(255, 255, 255, 0.5);";
  }
}
