"use strict";

let contextMenuLinkClassName = "context-menu-action";
let contextMenuActive = "context-menu-active";
let contextContainerClassName = "context-menu";
let menu = document.querySelector("#context-menu");
let menuState = 0;

let targetClicked;
let targetClickedCP;
let targetClickedHistory;
let historySize = 0;


// UTILS FUNCTIONS

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

// ACTIONS FUNCTIONS

function doAction(action) {
  if (action === "Remove") {
    targetClicked.target.remove();
  }
  // if (action === "Edit")
  //   target.srcElement.innerText = "wtf";
}

// LISTENER & INIT FUNCTIONS

// Listens for contextmenu events (right click).
function contextListener() {
  document.addEventListener("contextmenu", function (e) {
    let taskItemInContext = clickInsideElement(e, contextContainerClassName);
    
    e.preventDefault();
    if (!taskItemInContext) {
      toggleMenuOn();
      positionMenu(e);
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
  window.onkeyup = function (e) {
    if (e.keyCode === 27) {
      toggleMenuOff();
    }
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
  windowResizeListener();
}

init();
