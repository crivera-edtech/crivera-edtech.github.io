// nav.js — BloomELearning navigation behavior (dropdowns + outside click + ESC)
// Integrates with your existing header markup (.dropdown, .dropdown-toggle, .dropdown-menu)

(function () {
  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown").forEach((dd) => {
      dd.classList.remove("open");
      const t = dd.querySelector(".dropdown-toggle");
      if (t) t.setAttribute("aria-expanded", "false");
    });
  }

  function toggleDropdown(dd) {
    const isOpen = dd.classList.contains("open");
    closeAllDropdowns();
    if (!isOpen) {
      dd.classList.add("open");
      const t = dd.querySelector(".dropdown-toggle");
      if (t) t.setAttribute("aria-expanded", "true");
    }
  }

  function initNav() {
    // Attach handlers to dropdown toggles/menus
    document.querySelectorAll(".dropdown").forEach((dd) => {
      const toggle = dd.querySelector(".dropdown-toggle");
      const menu = dd.querySelector(".dropdown-menu");
      if (!toggle || !menu) return;

      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleDropdown(dd);
      });

      menu.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });

    // Click outside closes
    document.addEventListener("click", () => closeAllDropdowns());

    // ESC closes
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAllDropdowns();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNav);
  } else {
    initNav();
  }
})();
