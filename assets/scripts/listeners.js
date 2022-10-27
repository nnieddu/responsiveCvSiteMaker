"use strict";

const contextMenuLinkClassName = "context-menu-action";
const contextMenuActive = "context-menu-active";
const contextContainerClassName = "context-menu";
const menu = document.querySelector("#context-menu");

// Listens for contextmenu events (right click).
function contextListener() {
  document.addEventListener("contextmenu", function (e) {
    let taskItemInContext = clickOnElem(e, contextContainerClassName);

    e.preventDefault();
    if (!taskItemInContext) {
      contextualMenuOn();
      positionMenu(e);
      targetClicked = e;
      historyPath = e.composedPath()[1];
      history = e.composedPath()[1].outerHTML;
    } else {
      taskItemInContext = null;
      contextualMenuOff();
    }
  });
}

function clickListener() {
  document.addEventListener("click", function (e) {
    let clickedIsLink = clickOnElem(e, contextMenuLinkClassName);
    contextualMenuOff();
    targetClicked = e;
    if (targetClicked)
      document.getElementById("pannel-target").innerText =
        "[ " +
        targetClicked.target.localName +
        " ]  \n\n" +
        targetClicked.target.innerText;
    // getHtmlTag(e);
    console.log(e);

    if (clickedIsLink) {
      // e.preventDefault();
      doAction(clickedIsLink.getAttribute("data-action"));
      contextualMenuOff();
      // return;
    } else {
      let button = e.button;
      if (button === 1) {
        contextualMenuOff();
      }
    }

    clickedIsLink = clickOnElem(e, contextContainerClassName);
    if (!clickedIsLink) targetClicked = e;

    // --------------------------------
    // ----------- Edit pannel --------
    // --------------------------------
    // if (
    //   editState &&
    //   e.target !== document.getElementById("colorWell") &&
    //   !clickedIsLink
    // ) {
    //   targetClicked = e;
    //   document.getElementById("pannel-target").innerText =
    //     "[ " +
    //     targetClicked.target.localName +
    //     " ] \n" +
    //     targetClicked.target.innerText;
    // }

    // --------------------------------
    // ----------- mobile nav bar -----
    // --------------------------------
    if (
      removeBtnState &&
      !clickedIsLink &&
      !clickOnElem(e, "nav-links") &&
      targetClicked
    ) {
      doAction("Remove");
      removeBtnState = 0;
      removeBtn.style.backgroundColor = "white";
    }
  });
}

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

function mobileBtnListener() {
  cursorBtn.addEventListener("click", () => {
    cursorBtn.style.backgroundColor = "#9b9b9b";
  });

  removeBtn.addEventListener("click", () => {
    removeBtn.style.backgroundColor = "blue";
    removeBtnState = 1;
  });

  editBtn.addEventListener("click", () => {
    editBtn.style.backgroundColor = "antiquewhite";
    doAction("Edit");
  });

  colorPickBtn.addEventListener("click", () => {
    colorPickBtn.style.backgroundColor = "red";
  });

  colorPickBtn.addEventListener("click", () => {
    colorPickBtn.style.backgroundColor = "red";
  });

  changePanSide.addEventListener("click", () => {
    togglePanSide();
  });
}
