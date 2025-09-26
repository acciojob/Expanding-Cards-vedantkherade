//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll(".panel");

    panels.forEach(panel => {
      panel.addEventListener("click", () => {
        panels.forEach(p => p.classList.remove("active"));
        panel.classList.add("active");
      });
    });
  });