(function () {
  const KEY = "alter-theme"; // "dark" | "light"
  const root = document.documentElement;

  function apply(mode) {
    root.setAttribute("data-theme", mode);
  }

  function setMode(mode) {
    localStorage.setItem(KEY, mode);
    apply(mode);
    updateToggleButton(mode);
  }

  function updateToggleButton(mode) {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    
    const darkIcon = btn.querySelector(".theme-icon-dark");
    const lightIcon = btn.querySelector(".theme-icon-light");
    
    if (darkIcon && lightIcon) {
      if (mode === "dark") {
        // Dark mode: show moon icon, hide sun
        darkIcon.style.display = "flex";
        lightIcon.style.display = "none";
        btn.classList.add("active");
      } else {
        // Light mode: show sun icon, hide moon
        darkIcon.style.display = "none";
        lightIcon.style.display = "flex";
        btn.classList.remove("active");
      }
    }
  }

  function getMode() {
    return localStorage.getItem(KEY) || "dark";
  }

  function toggleTheme() {
    const current = getMode();
    const next = current === "dark" ? "light" : "dark";
    setMode(next);
  }

  // Apply theme immediately to prevent flash
  apply(getMode());

  // Attach button listener when DOM is ready
  function wireButton() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) {
      // Button not ready yet, try again shortly
      setTimeout(wireButton, 50);
      return;
    }

    // Remove any existing listeners and add fresh one
    btn.onclick = toggleTheme;
    
    // Set initial button state
    updateToggleButton(getMode());
  }

  // Initialize button
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireButton);
  } else {
    wireButton();
  }
})();
