console.log("page loaded...");

function hoverPlay(element) {
  let controller = element.hasAttribute("controls");
  if (controller == false) {
    element.play();
  }
}

function hoverPause(element) {
  let controller = element.hasAttribute("controls");
  if (controller == false) {
    element.pause();
  }
}

function showHideControls(element) {
  element.setAttribute("controls", true);
}
