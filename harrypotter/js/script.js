document.addEventListener("DOMContentLoaded", function () {
  let tombolMenu = document.querySelector(".tombol-menu");
  let menu = document.querySelector("nav .menu ul");

  // Toggle menu pada mobile
  tombolMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // Efek scroll (menambah background putih di navbar)
  window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.style.backgroundColor = "white";
      nav.style.color = "black";
    } else {
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      nav.style.color = "white";
    }
  });

  // Efek suara peluit Quidditch
  document
    .getElementById("play-whistle")
    .addEventListener("click", function () {
      let whistleSound = new Audio("assets/sounds/quidditch-whistle.mp3");
      whistleSound.play();
    });

  // Efek suara mantra saat tombol diklik
  document.getElementById("cast-spell").addEventListener("click", function () {
    let spellSound = new Audio("assets/sounds/wingardium-leviosa.mp3");
    spellSound.play();
  });
});
