const i18n = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    pill: "AI / Software Development",
    subtitle: "Student building practical projects with clean documentation and strong Git/GitHub workflows.",
    btn_github: "View GitHub",
    btn_featured: "Featured Project",
    meta_focus_label: "Focus:",
    meta_focus_value: "Web apps, data/AI, collaboration",
    meta_stack_label: "Stack:",
    tag_featured: "Featured",
    featured_desc: "Full-stack cinema booking app with REST API + EJS pages, JWT auth, and client/admin roles.",
    btn_repo: "Open Repo",
    btn_read_more: "Read more",
    about_title: "About",
    about_text:
      "I’m a student in AI / software development. I like building complete, real-world projects and explaining them clearly: goals, approach, decisions, and results. I value teamwork practices (branches, PRs, issues, and clear READMEs).",
    projects_title: "Projects",
    projects_subtitle: "Quality > quantity — a curated selection.",
    p1_b1: "JWT authentication (register/login) + role-based access (client/admin).",
    p1_b2: "CRUD for movies/showtimes and booking management.",
    p1_b3: "Clean documentation and structured code for maintainability.",
    btn_readme: "README",
    next_title: "🍽️ Recommendation System (Next)",
    next_meta: "Restaurants & accommodations — in progress",
    next_b1: "Goal: recommend places based on user preferences and location.",
    next_b2: "Approach: data cleaning, feature engineering, ranking/scoring.",
    next_b3: "Deliverable: clear README + demo examples + evaluation metrics.",
    next_cta: "Contact me for updates",
    other_text: "Other coursework/project repository.",
    edu_title: "Education",
    edu_text: "Student — AI / Software-related studies (portfolio-focused projects).",
    contact_title: "Contact",
    contact_text: "Email is the fastest way to reach me."
  },
  fr: {
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_education: "Études",
    nav_contact: "Contact",
    pill: "IA / Développement logiciel",
    subtitle: "Étudiant qui construit des projets concrets avec une documentation claire et de bonnes pratiques Git/GitHub.",
    btn_github: "Voir GitHub",
    btn_featured: "Projet vedette",
    meta_focus_label: "Focus :",
    meta_focus_value: "Apps web, data/IA, collaboration",
    meta_stack_label: "Stack :",
    tag_featured: "Projet vedette",
    featured_desc: "Application complète de réservation (API REST + EJS), auth JWT et rôles client/admin.",
    btn_repo: "Ouvrir le dépôt",
    btn_read_more: "Détails",
    about_title: "À propos",
    about_text:
      "Je suis étudiant en IA / développement logiciel. J’aime créer des projets complets et réalistes et les expliquer clairement : objectifs, approche, décisions et résultats. J’accorde aussi de l’importance au travail d’équipe (branches, PR, issues et READMEs propres).",
    projects_title: "Projets",
    projects_subtitle: "Qualité > quantité — une sélection soignée.",
    p1_b1: "Authentification JWT (inscription/connexion) + contrôle d’accès par rôle (client/admin).",
    p1_b2: "CRUD films/séances + gestion des réservations.",
    p1_b3: "Documentation claire et code structuré pour faciliter la maintenance.",
    btn_readme: "README",
    next_title: "🍽️ Système de recommandation (Prochain)",
    next_meta: "Restaurants & hébergements — en cours",
    next_b1: "But : recommander des lieux selon les préférences et la localisation.",
    next_b2: "Approche : nettoyage données, feature engineering, scoring/ranking.",
    next_b3: "Livrable : README clair + exemples + métriques d’évaluation.",
    next_cta: "Me contacter pour les mises à jour",
    other_text: "Autre dépôt de cours/projet.",
    edu_title: "Études",
    edu_text: "Étudiant — La Cité collégiale (projets orientés portfolio).",
    contact_title: "Contact",
    contact_text: "Le courriel est le moyen le plus rapide pour me joindre."
  }
};

function setLang(lang){
  document.documentElement.lang = lang === "fr" ? "fr" : "en";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  const btnEN = document.getElementById("btnEN");
  const btnFR = document.getElementById("btnFR");
  if (btnEN && btnFR){
    btnEN.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
    btnFR.setAttribute("aria-pressed", lang === "fr" ? "true" : "false");
  }

  localStorage.setItem("lang", lang);
}

document.getElementById("btnEN")?.addEventListener("click", () => setLang("en"));
document.getElementById("btnFR")?.addEventListener("click", () => setLang("fr"));

document.getElementById("year").textContent = new Date().getFullYear();

const saved = localStorage.getItem("lang");
setLang(saved === "fr" ? "fr" : "en");
