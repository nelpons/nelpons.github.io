// load-header.js

function initHeaderInteractions() {
    // Burger menu
    const burger = document.getElementById("burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }

    // Sous-menus dynamiques (ouverture à gauche si déborde)
    const submenus = document.querySelectorAll(".dropdown-submenu");

    submenus.forEach(menu => {
        // On attend un tick pour que le DOM soit bien peint
        requestAnimationFrame(() => {
            const rect = menu.getBoundingClientRect();
            if (rect.right > window.innerWidth) {
                menu.classList.add("open-left");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("site-header");
    if (!headerContainer) return;

    fetch("/assets/components/headerfr.inc")
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
            initHeaderInteractions();
        })
        .catch(err => console.error("Erreur chargement header:", err));
});
