let i = 0;
let images = document.querySelectorAll(".carousel img");

setInterval(function() {
  images[i].style.display = "none";
  i = (i + 1) % images.length;
  images[i].style.display = "block";
}, 1500); // exécute la fonction toutes les 1000ms (1 seconde)