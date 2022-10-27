"use strict";

const contextMenuLinkClassName = "context-menu-action";
const contextMenuActive = "context-menu-active";
const contextContainerClassName = "context-menu";
const menu = document.querySelector("#context-menu");

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
    }
  });
}

/* ------------------------------------------------------- */
/* clicks listeners ---------------------------------------*/
/* ------------------------------------------------------- */
function clickListener() {
  document.addEventListener("click", function (e) {
    let clickedIsLink = clickOnElem(e, contextMenuLinkClassName);
    contextualMenuOff();
    
    if (e) {
      targetClicked = e;
      document.getElementById("pannel-target").innerText ="[ " + 
        targetClicked.target.localName + " ]  \n\n" + targetClicked.target.innerText;
      }

    if (clickedIsLink) {
      historyHandling(e);
      doAction(clickedIsLink.getAttribute("data-action"));
      contextualMenuOff();
    }
    // if (removeState)
    //   doAction("Remove");
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
