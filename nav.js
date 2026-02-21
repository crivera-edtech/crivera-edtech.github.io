/* nav.js - BloomELearning dropdown behavior (mobile + desktop friendly)
   - Removes "Letter Tracing" from Subjects menu
*/

(function () {
  // Close all open dropdown menus
  function closeAll() {
    document.querySelectorAll(".dropdown").forEach((dd) => {
      dd.classList.remove("open");
      const toggle = dd.querySelector(".dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  }

  // Toggle a single dropdown
  function toggleDropdown(dd) {
    const isOpen = dd.classList.contains("open");
    closeAll();
    if (!isOpen) {
      dd.classList.add("open");
      const toggle = dd.querySelector(".dropdown-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    }
  }

  document.addEventListener("click", (e) => {
    const toggle = e.target.closest(".dropdown-toggle");
    const insideMenu = e.target.closest(".dropdown-menu");
    const dropdown = e.target.closest(".dropdown");

    // Click on a dropdown toggle
    if (toggle && dropdown) {
      e.preventDefault();
      toggleDropdown(dropdown);
      return;
    }

    // Click inside dropdown menu (let links work)
    if (insideMenu) return;

    // Click anywhere else closes dropdowns
    closeAll();
  });

  // Escape closes menus
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

  // Optional: close on scroll (feels cleaner)
  window.addEventListener("scroll", closeAll, { passive: true });
})();
