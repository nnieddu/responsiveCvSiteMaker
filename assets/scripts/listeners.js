"use strict";

const contextMenuLinkClassName = "context-menu-action";
const contextContainerClassName = "context-menu";
const menu = document.querySelector("#context-menu");
let   pannelTarget = document.getElementById("pannel-target");

/* ------------------------------------------------------- */
/* context listeners for contextmenu events (right click). */
/* ------------------------------------------------------- */
function contextListener() {
  document.addEventListener("contextmenu", function (e) {
    let taskItemInContext = clickOnElem(e, contextContainerClassName);
    e.preventDefault();
    if (!taskItemInContext) {
      contextualMenuOn();
      positionMenu(e);
      targetClicked = e;
      console.log(targetClicked.target);
      if (targetClicked)
        pannelTarget =
          "[ " + targetClicked.target.localName + " ]  \n\n" +
            targetClicked.target.innerText;
      historyHandling(e);
    }
  });
}

/* ------------------------------------------------------- */
/* clicks listeners -------------------------------------- */
/* ------------------------------------------------------- */
function clickListener() {
  document.addEventListener("click", function (e) {
    let clickedIsLink = clickOnElem(e, contextMenuLinkClassName);
    contextualMenuOff();
    if (clickedIsLink) {
      // console.log(clickedIsLink);
      // console.log(targetClicked);
      console.log("CLICKED~");
      doAction(clickedIsLink.getAttribute("data-action"));
      contextualMenuOff();
    }
  });
}

/* ------------------------------------------------------- */
/* Key and window listeners -------------------------------*/
/* ------------------------------------------------------- */
function keyupListener() {
  window.onkeydown = function (e) {
    manageKeyboardInput(e);
  };
}

function windowResizeListener() {
  window.onresize = function (e) {
    contextualMenuOff();
  };
}

/* ------------------------------------------------------- */
/* Buttons listeners --------------------------------------*/
/* ------------------------------------------------------- */
changePanSideBtn.addEventListener("click", () => {
  togglePanSide();
});
