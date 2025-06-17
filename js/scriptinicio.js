let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("banner");
  let dots = document.getElementsByClassName("punto");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.buton').forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
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




// Modulo inicio de sesión de empleados
var modal = document.getElementById('id01');

// Cuando se hace click fuera de cualquier parte del modulo, cerrarlo
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Carrusel automático Bloque izquerdo contenido Inferior
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.carrusel-inner img');
  let index = 0;

  function showSlide() {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
    index = (index + 1) % images.length;
  }

  showSlide();
  setInterval(showSlide, 3000); // Cambio cada 3 segundos
});



