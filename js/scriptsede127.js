let slideIndex = 1;
showSlides(slideIndex);

let autoSlideInterval = setInterval(() => {
    plusSlides(1);
}, 100);

function plusSlides(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex += n);
    autoSlideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
}

function currentSlide(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex = n);
    autoSlideInterval = setInterval(() => {
        plusSlides(1);
    }, 100);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("secciones");
    let dots = document.getElementsByClassName("pasar");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = "0";
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = "1";
    }, 100);

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";
}

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


// carrusel manual de acceso a otras sedes 
const sedes = document.querySelector(".sedes");
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

// Para ratón
sedes.addEventListener("mousedown", (event) => {
    isDragging = true;
    startX = event.clientX;
    scrollLeft = sedes.scrollLeft;
    sedes.style.cursor = "grabbing";
    event.preventDefault(); // Evita selecciones accidentales
});

sedes.addEventListener("mousemove", (event) => {
    if (!isDragging) return;
    const diff = event.clientX - startX;
    sedes.scrollLeft = scrollLeft - diff;
});

document.addEventListener("mouseup", () => { 
    isDragging = false;
    sedes.style.cursor = "grab";
});

document.addEventListener("mouseleave", () => {
    isDragging = false;
    sedes.style.cursor = "grab";
});

// Para dispositivos táctiles
sedes.addEventListener("touchstart", (event) => {
    isDragging = true;
    startX = event.touches[0].clientX;
    scrollLeft = sedes.scrollLeft;
});

sedes.addEventListener("touchmove", (event) => {
    if (!isDragging) return;
    const diff = event.touches[0].clientX - startX;
    sedes.scrollLeft = scrollLeft - diff;
});

sedes.addEventListener("touchend", () => {
    isDragging = false;
});
