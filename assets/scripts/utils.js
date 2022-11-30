"use strict";

const contextMenuActive = "context-menu-active";
let menuState = 0;

// function download(filename, text) {
//   let element = document.createElement('a');
//   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//   element.setAttribute('download', filename);
//   element.style.display = 'none';
//   document.body.appendChild(element);
//   element.click();
//   document.body.removeChild(element);
// }


// Function to check if we dont click on a ui elem and return this elem
function clickOnElem(e, className) {
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

function contextualMenuOn() {
  if (menuState !== 1) {
    menuState = 1;
    menu.classList.add(contextMenuActive);
  }
}

function contextualMenuOff() {
  if (menuState !== 0) {
    menuState = 0;
    menu.classList.remove(contextMenuActive);
  }
}

function positionMenu(e) {
  let menuWidth;
  let menuHeight;
  let clickCoordsX;
  let clickCoordsY;
  let windowWidth;
  let windowHeight;

  clickCoordsX = e.pageX;
  clickCoordsY = e.pageY;
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
