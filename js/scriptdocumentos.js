document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".acordeon-btn");

  // CLICK — aplicar a todos los botones
  botones.forEach((btn) => {
    btn.addEventListener("click", function () {
      const panel = btn.nextElementSibling;

      if (!panel || !panel.classList.contains("panel")) return;

      const isOpen = panel.classList.contains("show");
      closeSiblings(panel);

      if (!isOpen) {
        panel.classList.add("show");
        btn.classList.add("active");
      } else {
        panel.classList.remove("show");
        btn.classList.remove("active");
      }
    });
  });

  // HOVER — solo para botones principales
  botones.forEach((btn) => {
    const isPrincipal = btn.closest(".acordeon") &&
      !btn.closest(".subacordeon") &&
      !btn.closest(".coacordeon");

    if (isPrincipal) {
      btn.addEventListener("mouseenter", () => {
        botones.forEach(b => {
          if (b !== btn) b.classList.add("dim");
        });
      });

      btn.addEventListener("mouseleave", () => {
        botones.forEach(b => b.classList.remove("dim"));
      });
    }
  });

  function closeSiblings(currentPanel) {
    document.querySelectorAll(".panel.show").forEach(p => {
      if (p !== currentPanel && !p.contains(currentPanel)) {
        p.classList.remove("show");
        const btn = p.previousElementSibling;
        if (btn) btn.classList.remove("active");
      }
    });
  }

  // ... Resto de tu código: buscador, accesibilidad, menú móvil, scroll, etc.
});


// Buscador
const buscador = document.getElementById("buscador");
buscador.addEventListener("input", function () {
  const texto = this.value.toLowerCase();
  const acordeones = document.querySelectorAll(".acordeon, .subacordeon, .coacordeon");

  acordeones.forEach((item) => {
    const label = item.getAttribute("data-label");
    const labelTexto = label ? label.toLowerCase() : item.querySelector('.acordeon-btn')?.textContent.toLowerCase();
    if (labelTexto && labelTexto.includes(texto)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});


// Menu móvil de HAMBURGUESA
document.getElementById('hamburger').addEventListener('click', function () {
  const menu = document.getElementById('menuMovil');
  this.classList.toggle("change"); // activa/desactiva animación del ícono
  menu.classList.toggle('menu-open');
});

// Cierra el menú móvil al hacer clic en un enlace
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menuMovil');
  const links = menu.querySelectorAll('a');
  const hamburger = document.getElementById('hamburger');

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('menu-open');
      hamburger.classList.remove('change'); // restaurar ícono hamburguesa
    });
  });
});

// Cambio de color del menú al hacer scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// BOTÓN DE ACCESIBILIDAD
let isDarkMode = false;
let currentFontSize = 16; // valor por defecto

const minFontSize = 12;
const maxFontSize = 22;
const stepFontSize = 2;

function applyFontSize(size) {
  document.body.style.fontSize = size + 'px';
  localStorage.setItem('fontSize', size);
}

function increaseFontSize() {
  if (currentFontSize + stepFontSize <= maxFontSize) {
    currentFontSize += stepFontSize;
    applyFontSize(currentFontSize);
  }
}

function decreaseFontSize() {
  if (currentFontSize - stepFontSize >= minFontSize) {
    currentFontSize -= stepFontSize;
    applyFontSize(currentFontSize);
  }
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('darkMode', isDarkMode);

  const icon = document.getElementById('modoIcono');
  if (icon) {
    icon.src = isDarkMode ? 'img/boton-accesibilidad/dados1.png' : 'img/boton-accesibilidad/dados2.png';
    icon.alt = isDarkMode ? 'Modo claro' : 'Modo oscuro';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const accessibilityBtn = document.getElementById('Botonaccesible');
  const accessibilityMenu = document.getElementById('menuaccesible');

  // Limpiar estados guardados
  localStorage.removeItem('darkMode');
  localStorage.removeItem('fontSize');

  // Estado inicial
  isDarkMode = false;
  currentFontSize = 16;
  applyFontSize(currentFontSize);
  document.body.classList.remove('dark-mode');

  const icon = document.getElementById('modoIcono');
  if (icon) {
    icon.src = 'img/boton-accesibilidad/dados2.png';
    icon.alt = 'Modo oscuro';
  }

  // Mostrar/ocultar menú
  accessibilityBtn.addEventListener('click', () => {
    accessibilityMenu.classList.toggle('show-menu');
  });

  // Cerrar menú al hacer clic fuera del menú y del botón
  document.addEventListener('click', function (event) {
    if (
      accessibilityMenu.classList.contains('show-menu') &&
      !accessibilityMenu.contains(event.target) &&
      !accessibilityBtn.contains(event.target)
    ) {
      accessibilityMenu.classList.remove('show-menu');
    }
  });
});



// acciones boton de usuario 
document.addEventListener("DOMContentLoaded", function () {
    const botonSesion = document.querySelector(".altera-sesion");
    const menuSesion = document.querySelector(".menu-sesion");

    botonSesion.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        menuSesion.style.display = menuSesion.style.display === "block" ? "none" : "block";
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!botonSesion.contains(event.target) && !menuSesion.contains(event.target)) {
            menuSesion.style.display = "none";
        }
    });
});
