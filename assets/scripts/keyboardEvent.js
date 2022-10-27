"use strict";

function manageKeyboardInput(e) {
  // console.log(e.keyCode);
  // console.log(e.key);

  if (e.keyCode == 9 || e.key === "Tab") {
    e.preventDefault();
    toggleHiddenPannel();
    return;
  }

  if (e.keyCode == 90 && e.ctrlKey && historySize) {
    historyPath.outerHTML = history;
    historySize--;
  }

  if (editState) {
    e.preventDefault();
    if (e.keyCode == 8 || e.key === "Backspace" || e.key === "Delete") {
      targetClicked.srcElement.innerText =
        targetClicked.srcElement.innerText.slice(0, -1);
      return;
    }
    if (e.keyCode == 13 || e.key === "Enter") {
      targetClicked.srcElement.innerText += "\n";
      return;
    }
    if (e.keyCode == 17 || e.key === "Control") {
      return;
    }
    if (e.keyCode == 32) {
      spaceNeeded = 1;
      return;
    } else {
      if (spaceNeeded) targetClicked.srcElement.innerText += " " + e.key;
      else targetClicked.srcElement.innerText += e.key;
    }
  }
  spaceNeeded = 0;
}
