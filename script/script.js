document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".nav-bar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  } else {
    console.error("Errore: Non ho trovato nessun elemento con classe .navbar!");
  }
});
