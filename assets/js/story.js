/* ------------------------------------------
   STORY — Carrousel générique
------------------------------------------- */

const galleries = {}; // Tu remplis ça dans chaque page

function initStoryGalleries() {
    document.querySelectorAll("[data-gallery]").forEach(container => {
        const galleryName = container.dataset.gallery;
        const photos = galleries[galleryName];
        if (!photos) return;

        let index = 0;

        // Structure HTML
        container.innerHTML = `
            <button class="story-btn prev"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="story-viewer"><img src="${photos[0].src}"></div>
            <button class="story-btn next"><i class="fa-solid fa-chevron-right"></i></button>
            <p class="story-caption">${photos[0].caption}</p>
        `;

        const img = container.querySelector("img");
        const caption = container.querySelector(".story-caption");

        container.querySelector(".next").onclick = () => {
            index = (index + 1) % photos.length;
            img.src = photos[index].src;
            caption.textContent = photos[index].caption;
        };

        container.querySelector(".prev").onclick = () => {
            index = (index - 1 + photos.length) % photos.length;
            img.src = photos[index].src;
            caption.textContent = photos[index].caption;
        };
    });
}

document.addEventListener("DOMContentLoaded", initStoryGalleries);
