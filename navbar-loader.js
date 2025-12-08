document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar-container");
  if (!container) return;

  fetch("navbar.html")
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;
    })
    .catch(error => {
      console.error("Navbar failed to load:", error);
    });
});
