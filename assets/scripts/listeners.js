"use strict";

// Listens for contextmenu events (right click).
function contextListener() {
  document.addEventListener("contextmenu", function (e) {
    let taskItemInContext = clickInsideElement(e, contextContainerClassName);

    e.preventDefault();
    if (!taskItemInContext) {
      toggleMenuOn();
      positionMenu(e);
      targetClicked = e;
      historyPath = e.composedPath()[1];
      history = e.composedPath()[1].outerHTML;
    } else {
      taskItemInContext = null;
      toggleMenuOff();
    }
  });
}

function clickListener() {
  document.addEventListener("click", function (e) {
    let clickedIsLink = clickInsideElement(e, contextMenuLinkClassName);
    toggleMenuOff();
    // editState = 0;
    // document.body.classList.toggle("panel-open");

    if (clickedIsLink) {
      // e.preventDefault();
      doAction(clickedIsLink.getAttribute("data-action"));
      toggleMenuOff();
      // return;
    } else {
      let button = e.button;
      if (button === 1) {
        toggleMenuOff();
      }
    }

    if (editState && e.target !== document.getElementById("colorWell") && !clickedIsLink)
    {
      targetClicked = e;
      document.getElementById("pannel-target").innerText = targetClicked.target.innerText;
    }

    // --------------------------------
    // ----------- mobile nav bar -----
    // --------------------------------
    // targetClicked = e;
    if (
      removeBtnState &&
      !clickedIsLink &&
      !clickInsideElement(e, "nav-links") &&
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
    if (e.keyCode === 27) {
      toggleMenuOff();
      editState = 0;
      document.body.classList.toggle("panel-open");
      return;
    }

    if (e.keyCode == 90 && e.ctrlKey && historySize) {
      historyPath.outerHTML = history;
      historySize--;
    }

    if (e.keyCode == 9 || e.key === "Tab" )
      document.body.classList.toggle('panel-open');


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

    console.log(e.keyCode);
    console.log(e.key);
    spaceNeeded = 0;
  };
}

function windowResizeListener() {
  window.onresize = function (e) {
    toggleMenuOff();
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
}
