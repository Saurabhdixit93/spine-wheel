var wheel = document.getElementById("wheel");
var result = document.getElementById("result");
var spinButton = document.getElementById("spinButton");

var spinCount = 0;
var spinning = false;

function spinWheel() {
  if (spinning) {
    return;
  }

  spinCount++;
  spinning = true;

  // Reset result
  result.innerHTML = "";

  // Reset wheel animation
  wheel.style.animation = "";
  void wheel.offsetWidth; // Trigger reflow to restart animation

  // Spin the wheel
  wheel.style.animation = "spin 1.1s ease-out forwards";

  // Stop wheel and show result after animation ends
  setTimeout(stopWheel, 1000);
}

function stopWheel() {
  spinning = false;

  // Check spin count and show result
  if (spinCount === 1) {
    result.innerHTML = "Try again!";
  } else if (spinCount === 2) {
    result.innerHTML = "Congratulations! You won a gift card!";
    spinButton.disabled = true;
    spinButton.style.color = 'black';
    spinButton.style.backgroundColor = 'grey';
  }
}
