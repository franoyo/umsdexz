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





// BANNER
const mensaje = "Estamos contigo siempre";
const contenedor = document.getElementById("escritura");
const linea = document.getElementById("linea");
const velocidad = 90; // velocidad por letra en ms

// Asegura que el texto no se escriba más de una vez
let yaEscribio = false;

function escribirTexto(texto, elemento, velocidad) {
  if (yaEscribio) return;
  yaEscribio = true;

  let i = 0;
  const intervalo = setInterval(() => {
    if (i < texto.length) {
      elemento.textContent += texto[i];
      i++;
    } else {
      clearInterval(intervalo);

      // tiempo en ocultar la línea
      setTimeout(() => {
        linea.style.display = "none";
      }, 3000);
    }
  }, velocidad);
}

// tiempo de tardansa en escribir luego a cargar la pagina en ms
window.addEventListener("load", () => {
  setTimeout(() => {
    escribirTexto(mensaje, contenedor, velocidad);
  }, 400);
});


// Boton LEER MÁS
document.querySelectorAll(".leer-mas").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const contenido = btn.closest(".contenido");
    const allContenidos = document.querySelectorAll(".contenido");

    // Si este contenido ya está expandido, se pliega
    const isAlreadyExpanded = contenido.classList.contains("expandido");

    // Cerramos todos los contenidos
    allContenidos.forEach(c => {
      c.classList.remove("expandido");
      const btnCerrar = c.querySelector(".leer-mas");
      if (btnCerrar) btnCerrar.textContent = "Leer más";
    });

    // Si no estaba desplegado, lo desplegamos
    if (!isAlreadyExpanded) {
      contenido.classList.add("expandido");
      btn.textContent = "Ocultar";
    }
  });
});

