var colorWell
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    targetClicked.target.style.color = event.target.value;
  }

  function updateAll(event) {
    targetClicked.target.style.color = event.target.value;
  }
  


function doAction(action) {
  if (action === "Remove") {
    targetClicked.target.remove();
    if (!historySize) historySize++;
    return;
  }

  if (action === "Edit") {
    editState = 1;
    document.getElementById("hidden-panel").style.opacity = 1;
    document.body.classList.toggle("panel-open");
    document.getElementById("pannel-target").innerText = targetClicked.target.innerText;
  }

  if (action === "txtColor") {
      startup();
  }
}
