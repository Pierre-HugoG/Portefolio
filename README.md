# 📁 Portfolio Personnel — Guide de personnalisation

## Structure des fichiers

```
portfolio/
├── index.html              ← Page d'accueil (hero + à propos + aperçu)
├── README.md               ← Ce guide
│
├── pages/
│   ├── ateliers.html       ← Page ateliers professionnels
│   ├── stages.html         ← Page stages
│   └── documents.html      ← Page CV + LinkedIn + fichiers
│
├── css/
│   ├── variables.css       ← 🎨 COULEURS, TYPOS — modifie ici le thème
│   ├── reset.css           ← Normalisation navigateurs (ne pas toucher)
│   ├── main.css            ← Styles page d'accueil
│   ├── nav.css             ← Navigation
│   ├── animations.css      ← Toutes les animations
│   └── pages.css           ← Styles pages internes
│
├── js/
│   ├── main.js             ← Comportements globaux (navbar, scroll, reveal)
│   ├── ateliers.js         ← ✏️ TES DONNÉES ATELIERS
│   ├── stages.js           ← ✏️ TES DONNÉES STAGES
│   └── documents.js        ← ✏️ TES DONNÉES DOCUMENTS + LINKEDIN
│
└── assets/
    ├── photo.jpg           ← ✏️ Ta photo de profil
    ├── cv.pdf              ← ✏️ Ton CV en PDF
    ├── lettre-motivation.pdf
    ├── atelier1.jpg        ← ✏️ Images pour tes ateliers (optionnel)
    ├── logo-entreprise.png ← ✏️ Logos entreprises (optionnel)
    └── cr-stage1.pdf       ← ✏️ Comptes rendus PDF (optionnel)
```

---

## ✏️ Checklist de personnalisation

### 1. Informations globales (à changer dans TOUS les fichiers HTML)
- [ ] Remplace `TN` par tes initiales (logo navbar)
- [ ] Remplace `[Prénom Nom]` par ton vrai prénom et nom
- [ ] Remplace `[TON-EMAIL]` par ton adresse email
- [ ] Remplace `[TON-PROFIL]` dans les liens LinkedIn

### 2. Page d'accueil (`index.html`)
- [ ] Ta photo → place-la dans `assets/photo.jpg`
- [ ] Ta présentation personnelle (section À propos)
- [ ] Tes compétences clés
- [ ] Tes informations (formation, école, ville)

### 3. Tes ateliers (`js/ateliers.js`)
```js
// Modifie chaque objet dans le tableau ATELIERS :
{
  titre: "Nom de l'atelier",
  description: "Ta description",
  date: "Mois Année",
  categorie: "Ex: Marketing",
  emoji: "🎯",        // Emoji affiché si pas d'image
  image: "",          // "../assets/atelier1.jpg" — ou laisser vide
  fichier: "",        // "../assets/atelier1.pdf" — le document à télécharger
}
```

### 4. Tes stages (`js/stages.js`)
```js
// Modifie chaque objet dans le tableau STAGES :
{
  entreprise: "Nom de l'entreprise",
  poste: "Ton poste",
  dateDebut: "Janvier 2025",
  dateFin: "Mars 2025",
  duree: "3 mois",
  lieu: "Paris, France",
  emoji: "🏢",
  logo: "",              // "../assets/logo-entreprise.png"
  description: "...",
  missions: ["Mission 1", "Mission 2"],
  compteRendu: `Ton texte complet...`,
  fichierCR: "",         // "../assets/cr-stage1.pdf"
  competences: ["Compétence A", "Outil B"],
}
```

### 5. Tes documents (`js/documents.js`)
- [ ] URL LinkedIn
- [ ] Chemins vers tes fichiers PDF (CV, lettre...)
- [ ] Ajoute d'autres documents si besoin

### 6. Personnaliser les couleurs (`css/variables.css`)
```css
--color-accent:   #7c6af7;   /* Violet — couleur principale */
--color-accent-2: #f7726a;   /* Corail — couleur secondaire */
--color-accent-3: #54e5c4;   /* Mint — 3e accent */
```
Change ces 3 hexadécimaux pour une autre palette !

---

## 🚀 Comment ouvrir le portfolio

**Option 1 — En local (simple) :**
Double-clique sur `index.html` dans ton explorateur de fichiers.

**Option 2 — Via VS Code Live Server (recommandé) :**
1. Installe l'extension "Live Server" dans VS Code
2. Clic droit sur `index.html` → "Open with Live Server"

**Option 3 — Mise en ligne gratuite :**
- **GitHub Pages** : push le dossier sur GitHub, active Pages dans Settings
- **Netlify** : glisse-dépose le dossier sur netlify.com/drop
- **Vercel** : `vercel deploy` en CLI

---

## 💡 Conseils

- Mets tes fichiers PDF dans le dossier `assets/`
- Pour les images, privilégie le format WebP ou JPG optimisé (< 500ko)
- Le portfolio est responsive mobile par défaut
- Les animations respectent le paramètre "Réduire les animations" du système
