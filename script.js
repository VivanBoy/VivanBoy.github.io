// French is the source language: it lives in index.html.
// English strings are below; keys match the data-i18n attributes.
const EN = {
  skip: "Skip to content",
  nav_projects: "Projects",
  nav_skills: "Skills",
  nav_journey: "Journey",
  nav_contact: "Contact",

  hero_kicker: "B.Sc. Computer Science · UQO · Gatineau",
  hero_role: "Artificial Intelligence · Software Development",
  hero_lead:
    "Graduate of the <strong>Artificial Intelligence program at La Cité collégiale</strong>, now pursuing a Bachelor of Computer Science (Data Science &amp; AI concentration) at the <strong>Université du Québec en Outaouais (UQO)</strong>. I build end-to-end AI solutions: data, models, LLM assistants, APIs and web interfaces.",
  btn_projects: "See my projects",
  btn_email: "Get in touch",
  stat_projects: "documented projects on GitHub",
  stat_llm: "LLM assistants running locally",
  stat_acc: "accuracy on voice command recognition (GRU)",
  portrait_tag: "B.Sc. Computer Science · AI",

  projects_title: "Projects",
  projects_sub: "A selection of team and solo projects — from data prototype to deployment.",
  badge_capstone: "Capstone project",
  ct_lead:
    "Recommendation platform for restaurants and accommodations in Ottawa, with an AI assistant that guides users.",
  ct_b1: "Data pipeline (cleaning, enrichment, EDA) versioned with <strong>DVC</strong>.",
  ct_b2: "Recommendation engine and <strong>FastAPI</strong> API, web interface in HTML/CSS/JS.",
  ct_b3: "Conversational assistant using <strong>RAG</strong> over the site documentation and a local LLM via <strong>Ollama</strong>.",
  ct_b4: "Model benchmark (Gemma&nbsp;3 4B, Qwen&nbsp;3 4B, llama.cpp) to pick the best quality/latency trade-off.",
  ct_team: "Team project with Japhet Bonheur Beda Valeria · La Cité collégiale",
  btn_repo: "View the code ↗",
  btn_repo_short: "Code",

  f_all: "All",
  f_llm: "Generative AI &amp; NLP",
  f_ml: "ML &amp; Deep learning",
  f_web: "Web, APIs &amp; deployment",

  cat_llm: "Generative AI",
  rag_desc:
    "Assistant for the staff of an Ottawa hotel that answers from internal documents (policies, procedures, collective agreement).",
  rag_b1: "<strong>FAISS</strong> index + MiniLM embeddings, generation with quantized <strong>Llama&nbsp;3.2 3B</strong> (GGUF).",
  rag_b2: "<strong>QLoRA</strong> fine-tuning of Qwen2.5 to match the hotel's tone, compared against RAG.",
  rag_b3: "NLP analysis of customer reviews and a <strong>Gradio</strong> demo.",

  cat_dl: "Deep learning",
  voice_title: "Voice commands — GRU",
  voice_desc: "Keyword spotting (yes, no, up, down, go, stop…) on the Google Speech Commands Dataset.",
  voice_b1: "Audio → <strong>MFCC</strong> (40 coeffs) → <strong>GRU</strong> network pipeline, 12 classes.",
  voice_b2: "<strong>~91%</strong> accuracy on the test set.",
  voice_b3: "Demos: Gradio (microphone) and a voice-controlled Python turtle.",

  cat_ts: "Time series",
  ss_desc: "Grocery demand forecasting and replenishment optimization.",
  ss_b1: "7 <strong>LightGBM</strong> models (1 to 7-day horizon), MAE ≈ 7 units.",
  ss_b2: "Inventory simulation (reorder point, safety stock): service level ≈ 0.97.",
  ss_b3: "<strong>Streamlit</strong> dashboard.",

  cat_mlops: "MLOps",
  api_title: "Prediction API — Diabetes",
  api_desc: "Serving a classification model (Gradient Boosting) behind a REST API.",
  api_b1: "<strong>FastAPI</strong>: /predict, /health, /ready, Swagger docs.",
  api_b2: "Containerized with <strong>Docker</strong> and deployed to <strong>Google Cloud Run</strong>.",
  api_b3: "Feature engineering in the API + request logging.",

  cat_web: "Full-stack",
  cin_title: "Cinema reservation",
  cin_desc: "Ticket booking web app: JSON REST API + server-rendered pages.",
  cin_b1: "<strong>JWT</strong> authentication, client / admin roles.",
  cin_b2: "CRUD for movies, rooms, showtimes; bookings and cancellation.",
  cin_b3: "My contribution: pagination, “My bookings” page, admin views.",

  more_text: "Also on my GitHub: Git/GitHub labs, GitHub Pages and ML experiment tracking.",
  more_link: "All repositories ↗",

  skills_title: "Skills",
  skills_sub: "The tools I actually use in my projects.",
  sk_ai: "Generative AI &amp; NLP",
  sk_ml: "Machine learning &amp; deep learning",
  sk_data: "Data",
  sk_ops: "APIs, deployment &amp; MLOps",
  sk_web: "Web development",
  sk_soft: "How I work",
  sk_soft_p:
    "Teamwork (branches, PRs, issues) · clear documentation · requirements &amp; project governance · bilingual FR / EN",

  journey_title: "Journey",
  journey_sub: "Education and key milestones.",
  tl_uqo_when: "2026 — present",
  badge_now: "In progress",
  tl_uqo_prog: "Bachelor of Computer Science — Data Science &amp; Artificial Intelligence concentration · Gatineau",
  tl_uqo_p:
    "Deepening the foundations of computer science (algorithms, mathematics, software engineering) and specializing in data science and artificial intelligence, building on the hands-on experience gained in college.",
  tl_cite_when: "Graduated · 2026",
  badge_done: "Completed",
  tl_cite_prog: "Artificial Intelligence program · Ottawa",
  tl_cite_p:
    "Applied training: machine learning, deep learning, generative AI, deploying AI solutions, web server programming and Git/GitHub tooling. Capstone project: CityTaste.",

  contact_title: "Let's work together",
  contact_sub:
    "Internship, student project or AI collaboration: I'm open to opportunities in the Ottawa–Gatineau area and remote.",
  footer_built: "Handcrafted · hosted on GitHub Pages",
};

const store = {
  get(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  },
};

const FR = {};

function setLang(lang) {
  document.documentElement.lang = lang;
  const dict = lang === "en" ? EN : FR;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value) el.innerHTML = value;
  });

  const isEN = lang === "en";
  const btnEN = document.getElementById("btnEN");
  const btnFR = document.getElementById("btnFR");
  btnEN.classList.toggle("is-active", isEN);
  btnFR.classList.toggle("is-active", !isEN);
  btnEN.setAttribute("aria-pressed", String(isEN));
  btnFR.setAttribute("aria-pressed", String(!isEN));

  store.set("lang", lang);
}

function currentTheme() {
  const explicit = document.documentElement.getAttribute("data-theme");
  if (explicit) return explicit;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

document.addEventListener("DOMContentLoaded", () => {
  // Language
  document.querySelectorAll("[data-i18n]").forEach(el => {
    FR[el.dataset.i18n] = el.innerHTML;
  });
  if (store.get("lang") === "en") setLang("en");
  document.getElementById("btnEN").addEventListener("click", () => setLang("en"));
  document.getElementById("btnFR").addEventListener("click", () => setLang("fr"));

  // Theme
  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
  });

  // Mobile menu
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuToggle");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    })
  );

  // Project filters
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll("#projectGrid .card");
  filters.forEach(btn =>
    btn.addEventListener("click", () => {
      const f = btn.dataset.filter;
      filters.forEach(b => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });
      cards.forEach(card => {
        card.hidden = f !== "all" && !card.dataset.cat.split(" ").includes(f);
      });
    })
  );

  // Highlight the nav link of the section in view
  const links = new Map([...nav.querySelectorAll("a")].map(a => [a.getAttribute("href").slice(1), a]));
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(a => a.classList.remove("is-current"));
        links.get(entry.target.id)?.classList.add("is-current");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  links.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
