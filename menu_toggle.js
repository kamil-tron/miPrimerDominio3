// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal (clase ya existente en la página)
const menu = document.querySelector(".Menu-horizontal");

if (btn && menu) {
  // Al hacer clic en el botón de hamburguesa
  btn.addEventListener("click", () => {
    // Alterna la visibilidad del menú en móviles
    menu.classList.toggle("active");
  });
} 
