var timeLeft = 180;
var visible = false;
var temp;
var Floatings = document.querySelector("#floatings");

console.log(Floatings);
temp = Floatings.innerHTML;
console.log(temp);
//Start

document.onmouseenter = handleMouseEnter;
function handleMouseEnter(event) {
  console.log(event);
  console.log("Entered");
  visible = true;
  console.log(visible);
  Floatings.innerHTML = temp;
  Floatings.classList.add("floatbg");
}

document.onmouseleave = handleMouseLeave;
function handleMouseLeave(event) {
  setTimeout(() => {
    Floatings.innerHTML = "";
    Floatings.classList.remove("floatbg");
  }, 5000);
}
// (function () {
//   document.onmousemove = handleMouseMove;
//   function handleMouseMove(event) {
//     console.log(event);
//   }
// })();
(function () {
  console.log("Ran");
  console.log(visible);
  if (!visible) Floatings.innerHTML = "";
})();
function changeElementContent() {
  if (timeLeft === 0) Pause();
  var countDownElement = document.getElementById("count-down");
  var mins = Math.floor(timeLeft / 60);
  var secs = (timeLeft % 60).toFixed(0);
  secs = secs.length === 1 ? "0" + secs : secs;
  countDownElement.innerHTML = mins + " : " + secs;
  timeLeft = timeLeft - 1;
}
var counter = setInterval(changeElementContent, 1000);

function Start() {
  counter = setInterval(changeElementContent, 1000);
}
//Pause
function Pause() {
  clearInterval(counter);
}
//Add
function Add() {
  timeLeft = timeLeft + 30;
}
//Minus
function Minus() {
  timeLeft = timeLeft < 30 ? timeLeft : timeLeft - 30;
}

//Reset
function Reset() {
  timeLeft = 180;
}
