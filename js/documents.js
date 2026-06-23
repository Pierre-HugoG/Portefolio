/* ============================================================
   DOCUMENTS.JS — Données de la page documents
   ✏️ Modifie les sections ci-dessous avec tes vrais liens et fichiers
   ============================================================ */

/* --- Tes infos LinkedIn --- */
const LINKEDIN = {
  nom: "Prénom NOM",            /* ✏️ Ton nom complet */
  titre: "Étudiant(e) en [Formation] @ [École]", /* ✏️ Ton titre LinkedIn */
  url: "https://linkedin.com/in/TON-PROFIL",       /* ✏️ Ton URL LinkedIn */
};

/* --- Tes documents --- */
const DOCUMENTS = [
  {
    id: "cv",
    titre: "Mon CV",
    description: "Curriculum vitæ complet : formation, expériences, compétences et centres d'intérêt.",
    emoji: "📄",
    type: "pdf",          /* pdf | link | file */
    fichier: "../assets/cv.pdf",   /* ✏️ Chemin vers ton CV en PDF */
    actions: [
      { label: "⬇ Télécharger", url: "../assets/cv.pdf", download: true },
      { label: "👁 Voir",        url: "../assets/cv.pdf", download: false },
    ],
  },
  {
    id: "linkedin",
    titre: "Profil LinkedIn",
    description: "Mon profil professionnel en ligne avec recommandations et réseau.",
    emoji: "💼",
    type: "link",
    fichier: "https://linkedin.com/in/TON-PROFIL", /* ✏️ */
    actions: [
      { label: "Voir le profil", url: "https://linkedin.com/in/TON-PROFIL", download: false },
    ],
  },
  {
    id: "lettre",
    titre: "Lettre de motivation",
    description: "Modèle de lettre de motivation adaptable selon le poste visé.",
    emoji: "✉️",
    type: "pdf",
    fichier: "../assets/lettre-motivation.pdf", /* ✏️ */
    actions: [
      { label: "⬇ Télécharger", url: "../assets/lettre-motivation.pdf", download: true },
    ],
  },
  /* ✏️ Ajoute d'autres documents ici */
  /*
  {
    id: "autre",
    titre: "Autre document",
    description: "Description...",
    emoji: "📁",
    type: "file",
    fichier: "../assets/autre.pdf",
    actions: [
      { label: "⬇ Télécharger", url: "../assets/autre.pdf", download: true },
    ],
  },
  */
];

/* ============================================================
   RENDU
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
        <p class="doc-desc">${d.description}</p>
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
