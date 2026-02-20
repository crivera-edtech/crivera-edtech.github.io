// BloomELearning nav.js
// Click-to-open dropdowns (mobile + desktop)

(function () {
  const dropdowns = Array.from(document.querySelectorAll(".dropdown"));
  const toggles = Array.from(document.querySelectorAll(".dropdown-toggle"));

  function closeAll(except) {
    dropdowns.forEach((dd) => {
      if (dd !== except) {
        dd.classList.remove("open");
        const t = dd.querySelector(".dropdown-toggle");
        if (t) t.setAttribute("aria-expanded", "false");
      }
    });
  }

  toggles.forEach((t) => {
    t.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const dd = t.closest(".dropdown");
      const isOpen = dd.classList.contains("open");

      closeAll(dd);

      if (!isOpen) {
        dd.classList.add("open");
        t.setAttribute("aria-expanded", "true");
      } else {
        dd.classList.remove("open");
        t.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Click outside closes all
  document.addEventListener("click", () => closeAll(null));

  // Escape closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll(null);
  });

  // If the window resizes, close menus (prevents weird positioning)
  window.addEventListener("resize", () => closeAll(null));
})();
