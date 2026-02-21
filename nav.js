// nav.js — BloomELearning navigation behavior (dropdowns + outside click + ESC)
// Keeps layout/theme; just fixes dropdown behavior and removes Games/Diagnostic from top nav.

(function () {
  // Toggle dropdown open/close
  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown").forEach(dd => {
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

  // Attach handlers
  document.querySelectorAll(".dropdown").forEach(dd => {
    const toggle = dd.querySelector(".dropdown-toggle");
    const menu = dd.querySelector(".dropdown-menu");

    if (!toggle || !menu) return;

    // Click toggle
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleDropdown(dd);
    });

    // Prevent clicks inside menu from closing immediately
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
})();
