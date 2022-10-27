'use strict'

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

// ----------------------------
// - mobile nav bar buttons ---
// ----------------------------
// if (
//   removeBtnState &&
//     !clickedIsLink &&
//       !clickOnElem(e, "nav-links") &&
//         targetClicked) 
// {
//   doAction("Remove");
//   removeBtnState = 0;
//   removeBtn.style.backgroundColor = "white";
// }