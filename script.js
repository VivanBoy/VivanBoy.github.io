const i18n = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    pill: "AI / Software Development",
    subtitle: "Student building practical projects with clear documentation and strong Git/GitHub workflows.",
    btn_github: "View GitHub",
    btn_featured: "Featured Project",
    meta_focus_label: "Focus:",
    meta_focus_value: "Web apps, data/AI, collaboration",
    meta_stack_label: "Stack:",
    featured_tag: "Featured",
    featured_desc: "Full-stack cinema booking app with REST API + EJS pages, JWT auth, and client/admin roles.",
    btn_repo: "Open Repo",
    btn_read_more: "Read more",
    about_title: "About",
    about_text:
      "I’m a student in AI / software development. I like building complete, real-world projects and explaining them clearly: goals, approach, decisions, and results. I also value teamwork practices (branches, PRs, issues, and clean READMEs).",
    projects_title: "Projects",
    projects_subtitle: "A curated selection (quality > quantity).",
    p1_b1: "JWT authentication (register/login) + role-based access (client/admin).",
    p1_b2: "CRUD for movies and showtimes + booking management.",
    p1_b3: "Clean documentation and structured code for maintainability.",
    btn_readme: "README",
    p2_title: "📌 Next Project",
    p2_meta: "Coming soon",
    p2_text: "Add another strong project here (with a clear README and screenshots).",
    p3_title: "📌 Next Project",
    p3_meta: "Coming soon",
    p3_text: "Keep it simple: problem → approach → results → learnings.",
    skills_title: "Skills",
    skills_lang: "Languages",
    skills_tools: "Tools",
    skills_db: "Databases",
    skills_focus: "Focus",
    skills_focus_text: "Documentation · Collaboration · Real-world projects",
    contact_title: "Contact",
    contact_text: "The easiest way to reach me is via GitHub."
  },
  fr: {
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    pill: "IA / Développement logiciel",
    subtitle: "Étudiant qui construit des projets concrets avec une documentation claire et de bonnes pratiques Git/GitHub.",
    btn_github: "Voir GitHub",
    btn_featured: "Projet vedette",
    meta_focus_label: "Focus :",
    meta_focus_value: "Apps web, data/IA, collaboration",
    meta_stack_label: "Stack :",
    featured_tag: "Projet vedette",
    featured_desc: "Application complète de réservation (API REST + EJS), auth JWT et rôles client/admin.",
    btn_repo: "Ouvrir le dépôt",
    btn_read_more: "Détails",
    about_title: "À propos",
    about_text:
      "Je suis étudiant en IA / développement logiciel. J’aime créer des projets complets et réalistes et les expliquer clairement : objectifs, approche, décisions et résultats. J’accorde aussi de l’importance au travail d’équipe (branches, PR, issues et READMEs propres).",
    projects_title: "Projets",
    projects_subtitle: "Une sélection soignée (qualité > quantité).",
    p1_b1: "Authentification JWT (inscription/connexion) + contrôle d’accès par rôle (client/admin).",
    p1_b2: "CRUD films/séances + gestion des réservations.",
    p1_b3: "Documentation claire et code structuré pour faciliter la maintenance.",
    btn_readme: "README",
    p2_title: "📌 Prochain projet",
    p2_meta: "Bientôt",
    p2_text: "Ajoute ici un autre projet solide (README clair + captures).",
    p3_title: "📌 Prochain projet",
    p3_meta: "Bientôt",
    p3_text: "Reste simple : problème → approche → résultats → apprentissages.",
    skills_title: "Compétences",
    skills_lang: "Langages",
    skills_tools: "Outils",
    skills_db: "Bases de données",
    skills_focus: "Focus",
    skills_focus_text: "Documentation · Collaboration · Projets concrets",
    contact_title: "Contact",
    contact_text: "Le moyen le plus simple pour me joindre : GitHub."
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
  btnEN.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
  btnFR.setAttribute("aria-pressed", lang === "fr" ? "true" : "false");

  localStorage.setItem("lang", lang);
}

document.getElementById("btnEN").addEventListener("click", () => setLang("en"));
document.getElementById("btnFR").addEventListener("click", () => setLang("fr"));

document.getElementById("year").textContent = new Date().getFullYear();

const saved = localStorage.getItem("lang");
setLang(saved === "fr" ? "fr" : "en");
