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

// Animasi emoji jatuh
const container = document.getElementById("fallingContainer");
const emojis = ["💖", "🎉", "💘", "✨", "🎈"];
setInterval(() => {
  const emoji = document.createElement("div");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.className =
    "absolute text-2xl animate-[fall_5s_linear_infinite] text-pink-500";
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.top = "-2rem";
  container.appendChild(emoji);
  setTimeout(() => emoji.remove(), 5000);
}, 300);

function typeLines(
  targetId,
  lines,
  typingSpeed = 50,
  lineDelay = 800,
  onDone = () => {}
) {
  const element = document.getElementById(targetId);
  element.textContent = ""; // Kosongkan isi awal
  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      onDone();
      return;
    }

    const line = lines[lineIndex];
    let charIndex = 0;
    const span = document.createElement("span");
    element.appendChild(span);

    const typingInterval = setInterval(() => {
      if (charIndex < line.length) {
        span.textContent += line[charIndex++];
      } else {
        clearInterval(typingInterval);
        element.appendChild(document.createElement("br"));
        lineIndex++;
        setTimeout(typeLine, lineDelay);
      }
    }, typingSpeed);
  }

  typeLine();
}

function playMusicAndScroll() {
  const audio = document.getElementById("loveSong");
  audio.play();

  const fotoIds = [
    "foto1",
    "foto2",
    "foto3",
    "foto4",
    "foto5",
    "foto6",
    "foto7",
  ];

  // 1. Scroll ke bagian kenangan dulu
  document.getElementById("kenangan").scrollIntoView({ behavior: "smooth" });

  // 2. Setelah 3 detik, mulai scroll ke foto-foto
  setTimeout(() => {
    let index = 0;

    // Scroll ke foto pertama
    document
      .getElementById(fotoIds[index])
      .scrollIntoView({ behavior: "smooth" });

    const interval = setInterval(() => {
      index++;
      if (index < fotoIds.length) {
        document
          .getElementById(fotoIds[index])
          .scrollIntoView({ behavior: "smooth" });
      } else {
        clearInterval(interval);

        // 3. Setelah semua foto, scroll ke surat cinta (`#hadiah`) setelah 3 detik
        setTimeout(() => {
          // Scroll ke surat cinta
          document
            .getElementById("hadiah")
            .scrollIntoView({ behavior: "smooth" });

          // Fade-in surat
          const suratBox = document.getElementById("suratBox");
          suratBox.classList.add("active");

          // Isi surat per baris
          const isiSurat = [
            "Sayangku,",
            "",
            "Hari ini adalah hari istimewa karena kamu dilahirkan ke dunia,",
            "dan aku bersyukur karena dunia juga mempertemukanku denganmu.",
            "Terima kasih telah menjadi cahaya dalam hidupku selama ini.",
            "Aku selalu bangga dan bahagia bersamamu.",
            "",
            "Semoga hari-harimu dipenuhi cinta, tawa, dan harapan yang indah.",
            "Aku sayang kamu, selalu 💖",
            "",
            "- Dari yang selalu mencintaimu",
          ];

          // Ketik isi surat per baris, lalu setelah selesai baru scroll ke penutup
          typeLines("suratText", isiSurat, 100, 800, () => {
            // callback onDone setelah selesai mengetik
            setTimeout(() => {
              document
                .getElementById("penutup")
                .scrollIntoView({ behavior: "smooth" });
            }, 3000); // beri jeda 1 detik agar tidak terlalu tiba-tiba
          });
        }, 2000); // delay sebelum scroll ke surat cinta
      }
    }, 3000); // interval scroll tiap foto
  }, 3000); // delay awal setelah scroll ke kenangan
}

// const container = document.querySelector(".falling-container");
// const emojis = ["🎈", "💖", "🎉", "💕", "💘", "💝"];
// const audio = document.getElementById("loveSong");

// function createFallingEmoji() {
//   const emoji = document.createElement("div");
//   emoji.classList.add("falling");
//   emoji.style.left = Math.random() * 100 + "vw";
//   emoji.style.animationDuration = 3 + Math.random() * 2 + "s";
//   emoji.style.fontSize = 20 + Math.random() * 20 + "px";
//   emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
//   container.appendChild(emoji);
//   setTimeout(() => emoji.remove(), 5000);
// }

// setInterval(createFallingEmoji, 300);

// 🔊 Mulai lagu saat tombol "Lihat Hadiah" ditekan
// document.querySelector(".btn").addEventListener("click", () => {
//   audio.play().catch((err) => {
//     console.log("Autoplay diblokir:", err);
//   });
// });
