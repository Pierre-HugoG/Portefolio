const ATELIERS = [
  {
    id: 1,
    titre: "Nom de l'atelier 1",
    description: "Décris ici l'atelier : objectif, méthode, résultat obtenu. Quelques phrases suffisent pour donner envie d'en savoir plus.",
    fichier: "",
    /* ✏️ Chemin vers un fichier PDF ou document : "../assets/atelier1.pdf" */
  },
  {
    id: 2,
    titre: "Atelier Professionel Pour M2L",
    description: "Décris ici le second atelier : contexte, compétences mobilisées, livrables produits.",
    image: "",
    fichier: "",
  },
  /* ✏️ Ajoute autant de blocs { } que tu as d'ateliers */
];

function renderAteliers() {
  const grid = document.getElementById('ateliersGrid');
  if (!grid) return;

  if (!ATELIERS.length) {
    grid.innerHTML = '<p style="color:var(--color-text-muted);grid-column:1/-1;text-align:center;padding:4rem 0">Aucun atelier ajouté pour l\'instant.</p>';
    return;
  }

  grid.innerHTML = ATELIERS.map((a, i) => `
    <article class="atelier-card reveal delay-${i % 4}" role="article">
      <div class="atelier-banner">
        ${a.image
          ? `<img src="${a.image}" alt="${a.titre}" loading="lazy" />`
          : `<span class="atelier-banner-placeholder">${a.emoji}</span>`}
        <span class="atelier-tag">${a.categorie}</span>
      </div>
      <div class="atelier-body">
        <h3 class="atelier-title">${a.titre}</h3>
        <p class="atelier-desc">${a.description}</p>
        <div class="atelier-meta">
          <span class="atelier-date">${a.date}</span>
          <div class="atelier-actions">
            ${a.fichier ? `
              <a href="${a.fichier}" target="_blank" class="icon-btn" title="Télécharger le document" download>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
              <a href="${a.fichier}" target="_blank" class="icon-btn" title="Voir le document">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </a>
            ` : `
              <span class="icon-btn" title="Pas de document" style="opacity:.3;cursor:default">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </span>
            `}
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Re-init reveal pour les nouveaux éléments
  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}

document.addEventListener('DOMContentLoaded', renderAteliers);
