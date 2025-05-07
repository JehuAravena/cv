document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const sunIcon = '<i class="fas fa-sun"></i>';
  const moonIcon = '<i class="fas fa-moon"></i>';

  const applyTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark-mode");
      if (themeToggle) themeToggle.innerHTML = sunIcon;
    } else {
      body.classList.remove("dark-mode");
      if (themeToggle) themeToggle.innerHTML = moonIcon;
    }
  };

  let currentTheme = localStorage.getItem("theme");
  if (!currentTheme) {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    currentTheme = prefersDark ? "dark" : "light";
  }
  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  const secretCode = "tema";
  let typedSequence = "";

  document.addEventListener("keydown", (e) => {
    if (
      document.activeElement &&
      (document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA")
    ) {
      return;
    }

    if (e.key.length === 1 && e.key.match(/[a-z0-9]/i)) {
      typedSequence += e.key.toLowerCase();

      if (typedSequence.length > secretCode.length) {
        typedSequence = typedSequence.substring(
          typedSequence.length - secretCode.length
        );
      }

      if (typedSequence === secretCode) {
        const newTheme = body.classList.contains("dark-mode")
          ? "light"
          : "dark";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        typedSequence = "";
      }
    } else if (e.key === "Escape") {
      typedSequence = "";
    }
  });

  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
