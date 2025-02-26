(function () {
  const THEME_MAP = {
    dark: ["black", "yellow", "dark-mint", "orange"],
    light: ["blue", "light", "mint", "magenta"],
  };

  function getRandomTheme(mode) {
    const themes = THEME_MAP[mode];
    const randomIndex = Math.floor(Math.random() * themes.length);
    return themes[randomIndex];
  }

  function setTheme(preference, specificTheme = null) {
    if (!document.body) return;

    // Use stored specific theme or get random one
    const themeName = specificTheme || getRandomTheme(preference);

    // Remove all possible theme classes
    Object.values(THEME_MAP)
      .flat()
      .forEach((theme) => {
        document.body.classList.remove(`theme-${theme}`);
      });

    // Add new theme class
    document.body.classList.add(`theme-${themeName}`);

    // Update HTML attribute for the sun/moon animation
    document.firstElementChild.setAttribute("data-theme", preference);

    // Update button aria-label
    const toggle = document.querySelector("#theme-toggle");
    if (toggle) {
      toggle.setAttribute("aria-label", preference);
    }

    // Save both preference and specific theme
    localStorage.setItem("theme-preference", preference);
    localStorage.setItem("specific-theme", themeName);
  }

  function initializeTheme() {
    // Get saved preferences
    const savedPreference = localStorage.getItem("theme-preference");
    const savedSpecificTheme = localStorage.getItem("specific-theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedPreference || systemPreference;

    // Initialize with saved specific theme
    setTheme(initialTheme, savedSpecificTheme);

    // Add click handler
    const toggle = document.querySelector("#theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const current = localStorage.getItem("theme-preference") || initialTheme;
        const newPreference = current === "dark" ? "light" : "dark";
        // Only get random theme on click
        setTheme(newPreference);
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTheme);
  } else {
    initializeTheme();
  }

  // Sync with system changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: isDark }) => {
    const savedSpecificTheme = localStorage.getItem("specific-theme");
    setTheme(isDark ? "dark" : "light", savedSpecificTheme);
  });
})();
