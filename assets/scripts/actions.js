"use strict";

function doAction(action) {
  switch (action) {
    case "Remove":
      if (targetClicked) targetClicked.target.remove();
      break;
    case "Edit":
      toggleHiddenPannel();
      break;
    case "txtColor":
      document.body.style.cursor = "url(./../../cursor.svg) 4 12, auto";
      startup();
      break;
    default:
      null;
  }

  if (!historySize) historySize++;
}
