const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_education: "Education",
    nav_contact: "Contact",

    hero_badge: "AI / Software Dev",
    hero_subtitle: "Student building practical projects with clear documentation and strong Git/GitHub workflows.",

    meta_focus_label: "Focus",
    meta_focus_value: "Web apps · Data/AI · Collaboration",
    meta_stack_label: "Stack",

    btn_github: "View GitHub",
    btn_projects: "See Projects",
    btn_email: "Email",

    tag_featured: "Featured",
    featured_cinema_sub: "Full-stack booking app (REST API + EJS) with JWT auth and client/admin roles.",

    cinema_b1: "JWT authentication + role-based access (client/admin).",
    cinema_b2: "CRUD movies/showtimes + booking management.",
    cinema_b3: "Clean README + structured project for maintainability.",

    btn_open_repo: "Open repo",
    btn_readme: "README",

    edu_line: "📍 Education: La Cité collégiale",
    hero_tip: "Tip: keep the portfolio simple, clean, and focused on 1–2 strong projects.",

    about_title: "About",
    about_sub: "Clear communication + good Git habits + real-world projects.",
    about_p1:
      "I’m an AI / Software Development student. I focus on building projects that are complete and easy to understand: context, objective, approach, decisions, and results. I also value collaboration workflows (branches, PRs, issues).",
    about_p2: "I like structured documentation: problem → method → results → conclusion.",

    projects_title: "Projects",
    projects_sub: "A curated selection (quality & clarity first).",

    mini_featured: "Featured",
    cinema_card_sub: "Full-stack booking app (REST API + EJS)",

    mini_wip: "In progress",
    reco_card_sub: "Restaurants & accommodations recommendation",
    reco_b1: "Goal: recommend places based on preferences and location.",
    reco_b2: "Approach: cleaning, features, scoring/ranking, evaluation.",
    reco_b3: "Deliverable: README + demo examples + metrics.",
    btn_contact_updates: "Contact for updates",

    highlights: "Highlights",
    smartstock_sub: "Data/Forecasting project",
    smartstock_b1: "Time series / forecasting experiments",
    smartstock_b2: "Clear structure for coursework deliverables",

    education_title: "Education",
    education_sub: "Where I study and what I focus on.",
    education_line: "Student — AI / Software-related studies",

    contact_title: "Contact",
    contact_sub: "Fastest: email or GitHub."
  },

  fr: {
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_education: "Études",
    nav_contact: "Contact",

    hero_badge: "IA / Dév logiciel",
    hero_subtitle: "Étudiant qui construit des projets concrets avec une documentation claire et de bonnes pratiques Git/GitHub.",

    meta_focus_label: "Focus",
    meta_focus_value: "Apps web · Data/IA · Collaboration",
    meta_stack_label: "Stack",

    btn_github: "Voir GitHub",
    btn_projects: "Voir les projets",
    btn_email: "Courriel",

    tag_featured: "Projet vedette",
    featured_cinema_sub: "Application complète (API REST + EJS), auth JWT et rôles client/admin.",

    cinema_b1: "Authentification JWT + contrôle d’accès par rôle (client/admin).",
    cinema_b2: "CRUD films/séances + gestion des réservations.",
    cinema_b3: "README clair + projet structuré pour faciliter la maintenance.",

    btn_open_repo: "Ouvrir le dépôt",
    btn_readme: "README",

    edu_line: "📍 Études : La Cité collégiale",
    hero_tip: "Conseil : garde un portfolio simple, propre, et focalisé sur 1–2 projets forts.",

    about_title: "À propos",
    about_sub: "Communication claire + bonnes pratiques Git + projets concrets.",
    about_p1:
      "Je suis étudiant en IA / développement logiciel. Je construis des projets complets et faciles à comprendre : contexte, objectif, approche, décisions et résultats. J’accorde aussi de l’importance au travail d’équipe (branches, PR, issues).",
    about_p2: "J’aime une documentation structurée : problème → méthode → résultats → conclusion.",

    projects_title: "Projets",
    projects_sub: "Une sélection soignée (qualité & clarté d’abord).",

    mini_featured: "Vedette",
    cinema_card_sub: "Application de réservation (API REST + EJS)",

    mini_wip: "En cours",
    reco_card_sub: "Recommandation restaurants & hébergements",
    reco_b1: "But : recommander selon préférences et localisation.",
    reco_b2: "Approche : nettoyage, variables, scoring/ranking, évaluation.",
    reco_b3: "Livrable : README + exemples + métriques.",
    btn_contact_updates: "Me contacter pour les mises à jour",

    highlights: "Points clés",
    smartstock_sub: "Projet data/prévision",
    smartstock_b1: "Expérimentations séries temporelles / forecasting",
    smartstock_b2: "Structure claire pour les livrables de cours",

    education_title: "Études",
    education_sub: "Où j’étudie et ce que je fais.",
    education_line: "Étudiant — études liées IA / développement",

    contact_title: "Contact",
    contact_sub: "Le plus rapide : courriel ou GitHub."
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;

  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const btnEN = document.getElementById("btnEN");
  const btnFR = document.getElementById("btnFR");

  if (btnEN && btnFR) {
    const isEN = lang === "en";
    btnEN.classList.toggle("btn--active", isEN);
    btnFR.classList.toggle("btn--active", !isEN);

    btnEN.setAttribute("aria-pressed", isEN ? "true" : "false");
    btnFR.setAttribute("aria-pressed", !isEN ? "true" : "false");
  }

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang");
  setLang(saved === "fr" ? "fr" : "en");

  document.getElementById("btnEN")?.addEventListener("click", () => setLang("en"));
  document.getElementById("btnFR")?.addEventListener("click", () => setLang("fr"));
});