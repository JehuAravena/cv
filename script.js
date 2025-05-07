document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const sunIcon = '<i class="fas fa-sun"></i>';
  const moonIcon = '<i class="fas fa-moon"></i>';

  const applyTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark-mode");
      themeToggle.innerHTML = sunIcon;
    } else {
      body.classList.remove("dark-mode");
      themeToggle.innerHTML = moonIcon;
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

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      applyTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      applyTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  });

  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
