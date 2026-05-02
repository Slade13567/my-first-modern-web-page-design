const text = "This is my first modern website les goooooooo";
const speed = 100; 

let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("type-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = () => {
  setTimeout(typeEffect, 500);
};