"use strict";

let contextMenuLinkClassName = "context-menu-action";
let contextMenuActive = "context-menu-active";
let contextContainerClassName = "context-menu";
let menu = document.querySelector("#context-menu");
let menuState = 0;

let targetClicked;

let history;
let historyPath;
let historySize = 0;

let editState = 0;

let spaceNeeded = 0;


// function download(filename, text) {
//   var element = document.createElement('a');
//   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//   element.setAttribute('download', filename);
//   element.style.display = 'none';
//   document.body.appendChild(element);
//   element.click();
//   document.body.removeChild(element);
// }

///////////////////////////////////////////////////////////////////////
//
// UTILS FUNCTIONS
//
///////////////////////////////////////////////////////////////////////

// Function to check if we clicked inside an element with a specific Class
function clickInsideElement(e, className) {
  let clickedElem = e.srcElement || e.target;

  if (clickedElem.classList.contains(className)) {
    return clickedElem;
  } else {
    while ((clickedElem = clickedElem.parentNode)) {
      if (clickedElem.classList && clickedElem.classList.contains(className)) {
        return clickedElem;
      }
    }
  }
  return false;
}

function toggleMenuOn() {
  if (menuState !== 1) {
    menuState = 1;
    menu.classList.add(contextMenuActive);
  }
}

function toggleMenuOff() {
  if (menuState !== 0) {
    menuState = 0;
    menu.classList.remove(contextMenuActive);
  }
}

function positionMenu(e) {
  let menuWidth;
  let menuHeight;
  let clickCoords;
  let clickCoordsX;
  let clickCoordsY;
  let windowWidth;
  let windowHeight;
  let posx = 0;
  let posy = 0;

  if (!e) 
    e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  clickCoords = {
    x: posx,
    y: posy,
  };

  clickCoordsX = clickCoords.x;
  clickCoordsY = clickCoords.y;
  menuWidth = menu.offsetWidth + 4;
  menuHeight = menu.offsetHeight + 4;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  if (windowWidth - clickCoordsX < menuWidth) {
    menu.style.left = windowWidth - menuWidth + "px";
  } else {
    menu.style.left = clickCoordsX + "px";
  }
  if (windowHeight - clickCoordsY < menuHeight) {
    menu.style.top = windowHeight - menuHeight + "px";
  } else {
    menu.style.top = clickCoordsY + "px";
  }
}

///////////////////////////////////////////////////////////////////////
//
// ACTIONS FUNCTIONS
//
///////////////////////////////////////////////////////////////////////

function doAction(action) {
  if (action === "Remove") {
    targetClicked.target.remove();
    if (!historySize) historySize++;
  }
  if (action === "Edit")
  {
    editState = 1;
    // targetClicked.srcElement.style.color = "red";
    targetClicked.srcElement.style.backgroundColor = "rgba(255, 255, 255, 0.5);";
  }
}

///////////////////////////////////////////////////////////////////////
//
// LISTENER & INIT FUNCTIONS
//
///////////////////////////////////////////////////////////////////////

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
    let clickeElIsLink = clickInsideElement(e, contextMenuLinkClassName);
    toggleMenuOff();
    editState = 0;
    // if (targetClicked)
    //   targetClicked.srcElement.style.backgroundColor = "rgba(255, 255, 255, 0);";
    if (clickeElIsLink) {
      e.preventDefault();
      doAction(clickeElIsLink.getAttribute("data-action"));
      toggleMenuOff();
    } else {
      let button = e.button;
      if (button === 1) {
        toggleMenuOff();
      }
    }
  });
}

function keyupListener() {
  window.onkeydown = function (e) {
    if (e.keyCode === 27) {
      toggleMenuOff();
      editState = 0;
      return; 
    }

    if (e.keyCode == 90 && e.ctrlKey && historySize) {
      historyPath.outerHTML = history;
      historySize--;
    }

    if (editState)
    {
      e.preventDefault();
      if (e.keyCode == 8 || e.key === "Backspace" || e.key === "Delete") {
        targetClicked.srcElement.innerText = targetClicked.srcElement.innerText.slice(0, -1);
        return;
      }
      if (e.keyCode == 13 || e.key === "Enter") {
        targetClicked.srcElement.innerText += "\n";
        return;
      }
      if (e.keyCode == 32) {
        spaceNeeded = 1;
        return;
      }
      else {
        if (spaceNeeded)
          targetClicked.srcElement.innerText += (" " + e.key);
        else
          targetClicked.srcElement.innerText += e.key;
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

function init() {
  contextListener();
  clickListener();
  keyupListener();
  windowResizeListener(); // close ctx menu on windows resize
}

init();
