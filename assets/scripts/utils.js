"use strict";

// function download(filename, text) {
//   var element = document.createElement('a');
//   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//   element.setAttribute('download', filename);
//   element.style.display = 'none';
//   document.body.appendChild(element);
//   element.click();
//   document.body.removeChild(element);
// }

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

  if (!e) e = window.event;
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