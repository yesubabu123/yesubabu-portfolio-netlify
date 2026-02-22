// Typing effect
const text = "Full Stack Developer | React & Node.js";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
type();

// Scroll Reveal
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Skill animation
const bars = document.querySelectorAll(".progress-bar");
window.addEventListener("scroll", () => {
  bars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      bar.style.width = bar.dataset.progress + "%";
    }
  });
});