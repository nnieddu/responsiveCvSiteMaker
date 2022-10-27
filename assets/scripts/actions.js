"use strict";

function doAction(action) {
  if (action === "Remove") {
    targetClicked.target.remove();
    if (!historySize) historySize++;
    return;
  }

  // if (action === "Edit") {
  //   toggleHiddenPannel();
  // }

  // if (colorEditMode) startup();

//   if (action === "txtColor") {
//     startup();
//   }
}
