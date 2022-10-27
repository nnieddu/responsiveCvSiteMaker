"use strict";

function hiddenPannelOn() {
    document.body.style.cursor = "url(./../../cursor.svg) 4 12, auto";
    editState = 1;
    document.getElementById("hidden-panel").style.opacity = 1;
    document.body.classList.toggle("panel-open");
    if (targetClicked)
        document.getElementById("pannel-target").innerText = "[ " + targetClicked.target.localName + " ] \n" + targetClicked.target.innerText;
    if (colorEditMode)
        startup();
}