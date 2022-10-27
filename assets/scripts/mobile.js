"use strict";

let mobileNavState = 0;

function resetBtns() {
  editState = 0;
  removeState = 0;
  mobileNavState = 0;

  cursorBtn.style.backgroundColor = "unset";
  removeBtn.style.backgroundColor = "unset";
  editBtn.style.backgroundColor = "unset";
  colorPickBtn.style.backgroundColor = "unset";
}

function mobileBtnListener() {
  cursorBtn .addEventListener("click", () => {
    resetBtns();
    mobileNavState = 1 ;
    cursorBtn.style.backgroundColor = "#9b9b9b";
  });

  removeBtn.addEventListener("click", () => {
    resetBtns();
    removeBtn.style.backgroundColor = "blue";
    mobileNavState = 1 ;
    removeState = 1;
  });

  editBtn.addEventListener("click", () => {
    resetBtns();
    mobileNavState = 1 ;
    editBtn.style.backgroundColor = "antiquewhite";
    doAction("Edit");
  });

  colorPickBtn.addEventListener("click", () => {
    resetBtns();
    mobileNavState = 1 ;
    colorPickBtn.style.backgroundColor = "red";
  });
}