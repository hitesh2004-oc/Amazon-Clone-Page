// Mobile menu toggle
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

// Typing effect
const typingText = ["Java Developer", "Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
let index = 0, charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (charIndex < typingText[index].length) {
    typingElement.innerHTML += typingText[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.innerHTML = typingText[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % typingText.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingText.length) type();
});
