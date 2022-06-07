


const portal = document.getElementById("portal");
const button1 = document.getElementById("toSite");
const button2 = document.getElementById("toAcknowledge");



portal.addEventListener('mouseenter', onHover);
portal.addEventListener('mouseleave', onLeave);
button1.addEventListener('click', landing);
button1.addEventListener('mouseenter', bigger);
button1.addEventListener('mouseleave', smaller);
button2.addEventListener('mouseenter', bigger);
button2.addEventListener('mouseleave', smaller);




function onHover() {
  portal.style.animationPlayState = "paused";
}
function onLeave() {
  portal.style.animationPlayState = "running";
}

function landing () {
  window.location.href = "../views/landing.html";
}

function bigger (event) {
  let button = event.target;
  button.style.padding = "2%";
  button.style.backgroundColor = "rgb(50, 185, 238)";
}

function smaller (event) {
  let button = event.target;
  button.style.padding = "";
  button.style.backgroundColor = "";
}

