var colorEditMode = 1;
var colorWell;
var defaultColor = "#209934";

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
