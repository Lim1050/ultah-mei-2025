// Smooth scroll log (untuk debugging / feedback visual)
console.log("🎉 Birthday website loaded!");

// Kamu bisa tambahkan interaksi seru lain di sini, misalnya animasi tombol
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// Tambahan efek scroll untuk keperluan UX (opsional)
window.addEventListener("scroll", () => {
  const intro = document.getElementById("intro");
  if (window.scrollY > 50) {
    intro.style.opacity = 0.9;
  } else {
    intro.style.opacity = 1;
  }
});

const container = document.querySelector(".falling-container");
const emojis = ["🎈", "💖", "🎉", "💕", "💘", "💝"];
const audio = document.getElementById("loveSong");

function createFallingEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("falling");
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = 3 + Math.random() * 2 + "s";
  emoji.style.fontSize = 20 + Math.random() * 20 + "px";
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  container.appendChild(emoji);
  setTimeout(() => emoji.remove(), 5000);
}

setInterval(createFallingEmoji, 300);

// 🔊 Mulai lagu saat tombol "Lihat Hadiah" ditekan
document.querySelector(".btn").addEventListener("click", () => {
  audio.play().catch((err) => {
    console.log("Autoplay diblokir:", err);
  });
});
