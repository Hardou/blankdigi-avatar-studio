/* BlankDigi Avatar Studio live UX patch
   - Adds performance attributes to images
   - Closes mobile menu after navigation/action
*/
(function () {
  function addImagePerformanceAttributes(root = document) {
    root.querySelectorAll("img").forEach((img, index) => {
      img.decoding = "async";
      if (index > 2 && !img.hasAttribute("loading")) {
        img.loading = "lazy";
      }
    });
  }

  function closeMobileMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    if (navLinks) navLinks.classList.remove("active");
    if (hamburgerMenu) hamburgerMenu.classList.remove("active");
  }

  function bindMobileMenuAutoClose() {
    const navLinks = document.getElementById("navLinks");
    if (!navLinks || navLinks.dataset.autoCloseBound === "true") return;

    navLinks.dataset.autoCloseBound = "true";
    navLinks.addEventListener("click", (event) => {
      const target = event.target.closest("a, button");
      if (target) closeMobileMenu();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    addImagePerformanceAttributes();
    bindMobileMenuAutoClose();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            addImagePerformanceAttributes(node);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
