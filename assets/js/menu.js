// Menu burger mobile
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

if (burger && navLinks) {
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

// Détection automatique du bord pour les sous-menus
document.querySelectorAll(".dropdown-sub").forEach(sub => {
    const submenu = sub.querySelector(".dropdown-submenu");
    const arrow = sub.querySelector(".submenu-arrow");

    sub.addEventListener("mouseenter", () => {
        const rect = submenu.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            submenu.classList.add("open-left");
            if (arrow) arrow.textContent = "◂";
        } else {
            submenu.classList.remove("open-left");
            if (arrow) arrow.textContent = "▸";
        }
    });
});
