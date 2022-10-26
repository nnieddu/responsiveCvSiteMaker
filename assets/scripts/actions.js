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
  }

  if (action === "txtColor") {
    console.log("txtColor");
    document.getElementById("hidden-panel").style.opacity = 0.5;
    targetClicked.target.style.color = "red";
  }
}
