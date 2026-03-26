// Chargement automatique de la dernière actualité
fetch("assets/data/updates.json")
    .then(response => response.json())
    .then(data => {
        const latest = data.latest;
        const container = document.getElementById("latest-update");

        container.innerHTML = `
            <img src="${latest.image}" class="news-img">
            <div class="news-info">
                <p class="news-date">${latest.date}</p>
                <h3>${latest.title}</h3>
                <a href="${latest.link}" class="news-btn">Voir la page</a>
            </div>
        `;
    });
