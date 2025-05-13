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
