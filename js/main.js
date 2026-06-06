/**
 * 다음세대개발원 — 공통 UI 로직
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
  document.title = `${site.name} — ${site.nameEn}`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", site.description);
}

function renderHomePage() {
  const { site, hero, about, mission, news, impact, contact } = SITE_CONTENT;

  setText("hero-title", hero.title);
  setText("hero-subtitle", hero.subtitle);

  const heroIllustration = document.getElementById("hero-illustration");
  if (heroIllustration && hero.illustrationAlt) {
    heroIllustration.alt = hero.illustrationAlt;
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
        <h3 class="value-card__title">${v.title}</h3>
        <p class="value-card__desc">${v.description}</p>
      </div>
    `
      )
      .join("");
  }

  setText("mission-label", mission.sectionTitle);
  setText("mission-heading", mission.heading);

  const missionTrack = document.getElementById("mission-track");
  if (missionTrack) {
    missionTrack.innerHTML = mission.items
      .map(
        (item) => `
      <div class="mission-card">
        <div class="mission-card__keyword">${item.keyword}</div>
        <p class="mission-card__desc">다음 세대를 위해 ${item.description}</p>
      </div>
    `
      )
      .join("");
  }

  setText("news-label", news.sectionTitle);
  setText("news-heading", news.heading);

  const newsList = document.getElementById("news-list");
  if (newsList) {
    newsList.innerHTML = news.items
      .map(
        (item) => `
      <article class="news-item">
        <span class="news-item__category">${item.category}</span>
        <h3 class="news-item__title">${item.title}</h3>
        <time class="news-item__date" datetime="${item.date}">${item.date}</time>
      </article>
    `
      )
      .join("");
  }

  setText("impact-label", impact.sectionTitle);
  setText("impact-quote", impact.quote);

  const statsGrid = document.getElementById("stats-grid");
  if (statsGrid) {
    statsGrid.innerHTML = impact.stats
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
