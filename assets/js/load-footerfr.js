// load-layout.js
document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("site-footer");
    if (!footerContainer) return;

    fetch("/assets/components/footerfr.inc")
        .then(res => res.text())
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(err => console.error("Erreur chargement footer:", err));
});
