/* ============================================================
   STAGES.JS — Données et rendu de la page stages
   ✏️ Modifie le tableau STAGES pour renseigner tes stages
   ============================================================ */

const STAGES = [
  {
    id: 1,
    entreprise: "La Socamaine",
    /* ✏️ */
    dateDebut: "18 Mai 2026",
    /* ✏️ */
    dateFin: "19 Juin 2026",
    /* ✏️ */
    duree: "5 Semaines",
    /* ✏️ */
    lieu: "Champagne",
    /* ✏️ */
    emoji: "🏢",
    /* ✏️ Logo ou emoji de l'entreprise */
    logo: "../Socamaine.jpg",
    /* ✏️ Chemin vers le logo : "../assets/logo-entreprise.png" — laisser vide pour l'emoji */
    description: "Décris ici le contexte de ton stage : secteur d'activité de l'entreprise, taille, tes missions globales.",
    /* ✏️ */
    missions: [
      "Mission 1 - Gestion de l'infrastructure reseau",
      "Mission 2 — devellopement d'Appscript sur les extensions Google Sheet",
      "Mission 3 — Deployement de service informatique",
      /* ✏️ Ajoute tes vraies missions */
    ],
    compteRendu: `Ici, tu peux écrire ton compte rendu de stage complet.

Parle de tes apprentissages, des difficultés rencontrées, de comment tu les as surmontées, et de ce que tu retiens de cette expérience professionnelle.

Tu peux organiser ce texte en plusieurs paragraphes pour le rendre lisible. Les sauts de ligne sont respectés.

[Remplace ce texte par ton vrai compte rendu]`,
    /* ✏️ Ton compte rendu complet */
    fichierCR: "",
    /* ✏️ Si tu as un PDF de compte rendu : "../assets/cr-stage1.pdf" */
  },
  {
    id: 2,
    entreprise: "",
    poste: "",
    dateDebut: "",
    dateFin: "",
    duree: "",
    lieu: "",
    emoji: "🏭",
    logo: "",
    description: "",
    missions: [
      "Mission A",
      "Mission B",
      "Mission C",
    ],
    compteRendu: `Compte rendu du second stage.

[Remplace par ton vrai contenu]`,
    fichierCR: "",
    competences: ["", ""],
  },
  /* ✏️ Ajoute autant de blocs que tu as de stages */
];


function renderStages() {
  const list = document.getElementById('stagesList');
  if (!list) return;

  if (!STAGES.length) {
    list.innerHTML = '<p style="color:var(--color-text-muted);text-align:center;padding:4rem 0">Aucun stage renseigné pour l\'instant.</p>';
    return;
  }

  list.innerHTML = STAGES.map((s, i) => `
    <article class="stage-card reveal delay-${i % 3}">

      <div class="stage-header">
        <div class="stage-logo">
          ${s.logo
            ? `<img src="${s.logo}" alt="${s.entreprise}" style="width:100%;height:100%;object-fit:contain;border-radius:var(--radius-md)">`
            : s.emoji}
        </div>
        <div class="stage-info">
          <h3 class="stage-company">${s.entreprise}</h3>
          <p class="stage-role">${s.poste}</p>
          <div class="stage-chips">
            <span class="stage-chip chip-date">📅 ${s.dateDebut} → ${s.dateFin} · ${s.duree}</span>
            <span class="stage-chip chip-lieu">📍 ${s.lieu}</span>
            ${s.competences.map(c => `<span class="stage-chip" style="border-color:rgba(124,106,247,.3);color:var(--color-accent);background:rgba(124,106,247,.05)">${c}</span>`).join('')}
          </div>
        </div>
        <div class="stage-actions">
          ${s.fichierCR ? `
            <a href="${s.fichierCR}" target="_blank" download class="btn btn-ghost" style="font-size:var(--text-xs);padding:.4rem .9rem">
              ⬇ Télécharger CR
            </a>
          ` : ''}
        </div>
      </div>

      <div class="stage-body">
        <p class="stage-desc">${s.description}</p>
        <div class="stage-missions">
          <h4>Missions réalisées</h4>
          <ul>${s.missions.map(m => `<li>${m}</li>`).join('')}</ul>
        </div>
      </div>

      <div class="stage-cr-toggle" onclick="toggleCR(this)" aria-expanded="false">
        <span>📋 Lire le compte rendu complet</span>
        <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
      <div class="stage-cr-content">
        <pre class="cr-text">${s.compteRendu}</pre>
      </div>

    </article>
  `).join('');

  // Reveal
  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.08 });
    list.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}

function toggleCR(btn) {
  const content = btn.nextElementSibling;
  const isOpen = content.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
}

document.addEventListener('DOMContentLoaded', renderStages);
