/* ============================================================
   DOCUMENTS.JS — Données de la page documents
   ============================================================ */

/* --- Tes infos LinkedIn --- */
const LINKEDIN = {
  nom: "Pierre-Hugo Gondard",            
  titre: "Étudiant en BTS SIO au Lycee Andre Malraux", 
  url: "https://www.linkedin.com/in/pierre-hugo-gondard-a3350136a",       
};

/* --- Tes documents --- */
const DOCUMENTS = [
  {
    id: "cv",
    titre: "Mon CV",
    description: "Mon Curriculum Vitae à jour pour mes recherches de stage et d'alternance.",
    emoji: "📄",
    type: "pdf",          
    fichier: "../cv.pdf",   
    actions: [
      { label: "⬇ Télécharger le CV", url: "../CV-portefolio.pdf", download: true },  
    ],
  },
  {
    id: "linkedin",
    titre: "Profil LinkedIn",
    description: "Mon profil professionnel en ligne avec mon réseau et mes compétences.",
    emoji: "💼",
    type: "link",
    fichier: "https://www.linkedin.com/in/pierre-hugo-gondard-a3350136a", 
    actions: [
      { label: "Voir le profil", url: "https://www.linkedin.com/in/pierre-hugo-gondard-a3350136a", download: false },
    ],
  },
  {
    id: "synthese",
    titre: "Tableau de synthèse",
    description: "Mon tableau de synthèse récapitulant les compétences validées au cours de mon parcours.",
    emoji: "📊",
    type: "pdf", 
    fichier: "../synthese.xlsx", 
    actions: [
      { label: "⬇ Télécharger la synthèse", url: "../Tab-de-Competence.pdf", download: true },
    ],
  }
];

/* ============================================================
   RENDU (Ne pas modifier cette partie)
   ============================================================ */
function renderLinkedIn() {
  const card = document.getElementById('linkedinCard');
  if (!card) return;
  card.href = LINKEDIN.url;
  card.querySelector('.linkedin-name').textContent = LINKEDIN.nom;
  card.querySelector('.linkedin-titre').textContent = LINKEDIN.titre;
}

function renderDocuments() {
  const grid = document.getElementById('docsGrid');
  if (!grid) return;

  grid.innerHTML = DOCUMENTS.map((d, i) => `
    <div class="doc-card reveal delay-${i % 4}">
      <div class="doc-icon ${d.type}">${d.emoji}</div>
      <div>
        <h3 class="doc-title">${d.titre}</h3>
        <p class="doc-desc">${d.description || ''}</p>
      </div>
      <div class="doc-actions">
        ${d.actions.map(a => `
          <a
            href="${a.url}"
            ${a.download ? 'download' : 'target="_blank"'}
            class="doc-btn ${a.download ? 'doc-btn-primary' : 'doc-btn-secondary'}"
          >
            ${a.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');

  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderLinkedIn();
  renderDocuments();
});