// ============================================================
// OFFICINA — logica di stato e rendering
// ============================================================

const STRINGS = {
  it: {
    brand: "Officina",
    eyebrow: "Officina",
    title: "Cose in lavorazione",
    lede: "Progetti che vivono altrove, ma partono da qui. Piccoli, grezzi, in corso d'opera.",
    kofiLabel: "Sostienimi su Ko-fi",
    backToIndexLabel: "Torna all'index",
    openLabel: "Apri"
  },
  en: {
    brand: "Workshop",
    eyebrow: "Workshop",
    title: "Work in progress",
    lede: "Projects that live elsewhere, but start from here. Small, rough, still being built.",
    kofiLabel: "Support me on Ko-fi",
    backToIndexLabel: "Back to index",
    openLabel: "Open"
  }
};

const state = { lang: "it" };

const el = {
  body: document.body,
  brandBtn: document.getElementById("brandBtn"),
  langSwitch: document.getElementById("langSwitch"),
  board: document.getElementById("officinaBoard")
};

function t(key){ return STRINGS[state.lang][key]; }
function tf(field){ return field ? (field[state.lang] || field.en || field.it || "") : ""; }

// ---------------------------------------------------------
// Static text (i18n) painting
// ---------------------------------------------------------
function paintStaticText(){
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });
  document.documentElement.lang = state.lang;
  el.langSwitch.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("is-active", opt.dataset.langOption === state.lang);
  });
}

// ---------------------------------------------------------
// Bacheca dei progetti
// ---------------------------------------------------------
function renderBoard(){
  el.board.innerHTML = "";
  OFFICINA_PROJECTS.forEach(project => {
    const card = document.createElement("a");
    card.className = "officina-card";
    card.href = project.url;
    card.target = "_blank";
    card.rel = "noopener";

    const coverStyle = project.cover ? ` style="background-image:url('${project.cover}')"` : "";
    card.innerHTML = `
      <span class="officina-card__pin" aria-hidden="true"></span>
      <span class="officina-card__corner officina-card__corner--bl" aria-hidden="true"></span>
      <span class="officina-card__corner officina-card__corner--br" aria-hidden="true"></span>
      <div class="officina-card__cover"${coverStyle}>${project.cover ? "" : "copertina"}</div>
      <span class="officina-card__status">${tf(project.status)}</span>
      <h3 class="officina-card__title">${tf(project.title)}</h3>
      <p class="officina-card__tagline">${tf(project.tagline)}</p>
      <span class="officina-card__cta">${t("openLabel")} ${tf(project.title)} ↗</span>
    `;
    el.board.appendChild(card);
  });
}

// ---------------------------------------------------------
// Cambio lingua
// ---------------------------------------------------------
el.langSwitch.addEventListener("click", () => {
  state.lang = state.lang === "it" ? "en" : "it";
  el.body.dataset.lang = state.lang;
  paintStaticText();
  renderBoard();
});

// Il brand qui non ha una "home" interna diversa da sé stesso:
// riporta semplicemente all'index del sito.
el.brandBtn.addEventListener("click", () => { window.location.href = "index.html"; });

paintStaticText();
renderBoard();
