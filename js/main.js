/**
 * 다음세대개발원 (WeGrow Community) — 공통 UI 로직
 */

function initHeader() {
  const header = document.getElementById("header");
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function renderNavigation(activePage) {
  const nav = document.getElementById("nav");
  if (!nav || !SITE_CONTENT.navigation) return;

  nav.innerHTML = SITE_CONTENT.navigation
    .map((item) => {
      const isActive =
        (activePage === "home" &&
          (item.href === "index.html" || item.href.startsWith("index.html#"))) ||
        (activePage === "projects" && item.href === "projects.html");

      return `<a href="${item.href}" class="nav__link${isActive ? " is-active" : ""}">${item.label}</a>`;
    })
    .join("");
}

function renderFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  const { site, footer: footerContent } = SITE_CONTENT;

  footer.innerHTML = `
    <div class="container footer__inner">
      <div>
        <div class="footer__brand">${site.name}</div>
        <div class="footer__tagline">${site.nameEn}</div>
        <div class="footer__copyright">${footerContent.copyright}</div>
      </div>
      <div class="footer__links">
        ${footerContent.links
          .map((link) => `<a href="${link.href}" class="footer__link">${link.label}</a>`)
          .join("")}
      </div>
    </div>
  `;
}

function renderLogo() {
  document.querySelectorAll("[data-logo]").forEach((el) => {
    el.innerHTML = `
      <span class="logo__name">${SITE_CONTENT.site.name}</span>
      <span class="logo__en">${SITE_CONTENT.site.nameEn}</span>
    `;
  });
}

function setPageMeta() {
  const { site } = SITE_CONTENT;
  const page = document.body.dataset.page;
  if (page === "home") {
    document.title = `${site.name} — ${site.nameEn}`;
  }
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", site.description);
}

function renderHomePage() {
  const {
    hero,
    scripture,
    about,
    connection,
    indicators,
    necessity,
    collaboration,
    contact,
  } = SITE_CONTENT;

  setText("hero-badge", hero.badge);
  setText("hero-title", hero.title);
  setText("hero-subtitle", hero.subtitle);

  const heroPillars = document.getElementById("hero-pillars");
  if (heroPillars) {
    heroPillars.innerHTML = `
      <div class="pillar-card pillar-card--faith">
        <span class="pillar-card__icon">✦</span>
        <span class="pillar-card__label">신앙</span>
      </div>
      <div class="pillar-card pillar-card--character">
        <span class="pillar-card__icon">◈</span>
        <span class="pillar-card__label">인성</span>
      </div>
      <div class="pillar-card pillar-card--study">
        <span class="pillar-card__icon">◎</span>
        <span class="pillar-card__label">학업</span>
      </div>
      <div class="pillar-card__center">
        <span>제자화</span>
      </div>
    `;
  }

  const heroVisualTags = document.getElementById("hero-visual-tags");
  if (heroVisualTags && hero.visualTags) {
    heroVisualTags.innerHTML = hero.visualTags
      .map((tag) => `<span class="hero__tag">${tag}</span>`)
      .join("");
  }

  const heroActions = document.getElementById("hero-actions");
  if (heroActions) {
    heroActions.innerHTML = `
      <a href="${hero.ctaPrimary.href}" class="btn btn--primary">${hero.ctaPrimary.label}</a>
      <a href="${hero.ctaSecondary.href}" class="btn btn--secondary">${hero.ctaSecondary.label}</a>
    `;
  }

  setText("scripture-label", scripture.sectionTitle);
  const scriptureVerses = document.getElementById("scripture-verses");
  if (scriptureVerses) {
    scriptureVerses.innerHTML = scripture.verses.map((v) => `<p>${v}</p>`).join("");
  }
  setText("scripture-ref", scripture.reference);
  setText("scripture-summary", scripture.summary);

  setText("about-label", about.sectionTitle);
  setText("about-heading", about.heading);

  const aboutText = document.getElementById("about-text");
  if (aboutText) {
    aboutText.innerHTML = about.paragraphs.map((p) => `<p>${p}</p>`).join("");
  }

  const valuesGrid = document.getElementById("values-grid");
  if (valuesGrid) {
    valuesGrid.innerHTML = about.values
      .map(
        (v) => `
      <div class="value-card">
        <span class="value-card__icon" aria-hidden="true">${v.icon}</span>
        <h3 class="value-card__title">${v.title}</h3>
        <p class="value-card__desc">${v.description}</p>
      </div>
    `
      )
      .join("");
  }

  setText("connection-label", connection.sectionTitle);
  setText("connection-heading", connection.heading);

  const connectionScripture = document.getElementById("connection-scripture");
  if (connectionScripture) {
    connectionScripture.innerHTML = `
      <cite class="connection-scripture__ref">${connection.scripture.reference}</cite>
      <blockquote class="connection-scripture__text">${connection.scripture.text}</blockquote>
    `;
  }

  const connectionPoints = document.getElementById("connection-points");
  if (connectionPoints) {
    connectionPoints.innerHTML = connection.points
      .map((point) => `<li class="connection-point">${point}</li>`)
      .join("");
  }

  setText("indicators-label", indicators.sectionTitle);
  setText("indicators-heading", indicators.heading);
  setText("indicators-desc", indicators.description);

  const statsGrid = document.getElementById("stats-grid");
  if (statsGrid) {
    statsGrid.innerHTML = indicators.stats
      .map(
        (stat) => `
      <div class="stat-card">
        <div class="stat-card__value">${stat.value}</div>
        <div class="stat-card__label">${stat.label}</div>
      </div>
    `
      )
      .join("");
  }

  setText("necessity-label", necessity.sectionTitle);
  setText("necessity-heading", necessity.heading);
  setText("necessity-intro", necessity.intro);

  const necessityGrid = document.getElementById("necessity-grid");
  if (necessityGrid) {
    necessityGrid.innerHTML = necessity.items
      .map(
        (item) => `
      <article class="necessity-card">
        <span class="necessity-card__number">${item.number}</span>
        <h3 class="necessity-card__title">${item.title}</h3>
        <p class="necessity-card__desc">${item.description}</p>
      </article>
    `
      )
      .join("");
  }

  const churchResources = document.getElementById("church-resources");
  if (churchResources) {
    churchResources.innerHTML = `
      <h3 class="church-resources__title">${necessity.church.title}</h3>
      <div class="church-resources__tags">
        ${necessity.church.resources
          .map((r) => `<span class="church-resources__tag">${r}</span>`)
          .join("")}
      </div>
      <p class="church-resources__conclusion">${necessity.church.conclusion}</p>
    `;
  }

  setText("collaboration-label", collaboration.sectionTitle);
  setText("collaboration-heading", collaboration.heading);
  setText("collaboration-desc", collaboration.description);

  const collaborationGrid = document.getElementById("collaboration-grid");
  if (collaborationGrid) {
    collaborationGrid.innerHTML = collaboration.roles
      .map(
        (role, i) => `
      <div class="collab-card${i === 0 ? " collab-card--institute" : " collab-card--church"}">
        <h3 class="collab-card__title">${role.title}</h3>
        <ul class="collab-card__list">
          ${role.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `
      )
      .join("");
  }

  setText("contact-label", contact.sectionTitle);
  setText("contact-heading", contact.heading);
  setText("contact-desc", contact.description);

  const contactInfo = document.getElementById("contact-info");
  if (contactInfo) {
    contactInfo.innerHTML = `
      <div class="contact-info__item">
        <span class="contact-info__label">이메일</span>
        <span class="contact-info__value">
          <a href="mailto:${contact.email}">${contact.email}</a>
        </span>
      </div>
      <div class="contact-info__item">
        <span class="contact-info__label">전화</span>
        <span class="contact-info__value">
          <a href="tel:${contact.phone.replace(/-/g, "")}">${contact.phone}</a>
        </span>
      </div>
      <div class="contact-info__item">
        <span class="contact-info__label">주소</span>
        <span class="contact-info__value">${contact.address}</span>
      </div>
    `;
  }
}

function renderProjectsPage() {
  const { programs } = SITE_CONTENT;

  setText("page-title", programs.pageTitle);
  setText("page-subtitle", programs.pageSubtitle);
  setText("filter-title", programs.sectionTitle);

  const filterTabs = document.getElementById("filter-tabs");
  const programsGrid = document.getElementById("programs-grid");

  if (!filterTabs || !programsGrid) return;

  filterTabs.innerHTML = programs.categories
    .map(
      (cat, i) => `
    <button
      class="filter-tab${i === 0 ? " is-active" : ""}"
      data-category="${cat.id}"
      type="button"
    >${cat.label}</button>
  `
    )
    .join("");

  programsGrid.innerHTML = programs.items
    .map(
      (item) => `
    <article class="program-card" data-category="${item.category}">
      <span class="program-card__category">${item.categoryLabel}</span>
      <h2 class="program-card__title">${item.title}</h2>
      <p class="program-card__desc">${item.description}</p>
      ${
        item.features
          ? `<ul class="program-card__features">${item.features.map((f) => `<li>${f}</li>`).join("")}</ul>`
          : ""
      }
    </article>
  `
    )
    .join("");

  filterTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".filter-tab");
    if (!tab) return;

    const category = tab.dataset.category;

    filterTabs.querySelectorAll(".filter-tab").forEach((t) => {
      t.classList.toggle("is-active", t === tab);
    });

    programsGrid.querySelectorAll(".program-card").forEach((card) => {
      const match = category === "all" || card.dataset.category === category;
      card.classList.toggle("is-hidden", !match);
    });
  });
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  setPageMeta();
  renderLogo();
  renderNavigation(page);
  renderFooter();
  initHeader();

  if (page === "home") renderHomePage();
  if (page === "projects") renderProjectsPage();
});
