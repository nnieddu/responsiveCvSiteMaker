"use strict";

/* ------------------------------------------------------- */
/* PANNEL FTS ---------------------------------------------*/
/* ------------------------------------------------------- */
function togglePanSide() {
  if (hiddenPannel.style.left !== "-30%") {
    document.body.classList.toggle("panel-open-right");
    hiddenPannel.style.left = "-30%";
    changePanSide.style.paddingLeft = "0%";
    document.getElementById("arrow-right").style.opacity = 1;
    document.getElementById("arrow-left").style.opacity = 0;
    return;
  }
  document.body.classList.toggle("panel-open-right");
  changePanSide.style.paddingLeft = "13%";
  document.getElementById("arrow-right").style.opacity = 0;
  document.getElementById("arrow-left").style.opacity = 1;
  hiddenPannel.style.left = "unset";
  hiddenPannel.style.right = "-30%";
}

function toggleHiddenPannel() {
  editState = 1;
  if (hiddenPannel.style.opacity == 1)
    hiddenPannel.style.opacity = 0;
  else if (hiddenPannel.style.opacity == 0)
    hiddenPannel.style.opacity = 1;
  
    if(document.body.classList.contains("panel-open-right")) togglePanSide()

    document.body.classList.toggle("panel-open-left");
}

/* ------------------------------------------------------- */
/* Color --------------------------------------------------*/
/* ------------------------------------------------------- */
// 



/* ------------------------------------------------------- */
/* FONT SIZE ----------------------------------------------*/
/* ------------------------------------------------------- */

{/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="12" r="9"></circle>
   <line x1="9" y1="12" x2="15" y2="12"></line>
   <line x1="12" y1="9" x2="12" y2="15"></line>
</svg> */} 


{/* <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-minus" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="12" r="9"></circle>
   <line x1="9" y1="12" x2="15" y2="12"></line>
</svg> */}

/* ------------------------------------------------------- */
/* BG COLORS ----------------------------------------------*/
/* ------------------------------------------------------- */