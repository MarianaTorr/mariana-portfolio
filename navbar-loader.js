document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("navbar-container");
  if (!container) {
    console.error("Navbar container not found");
    return;
  }

  fetch("navbar.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Navbar HTML not found");
      }
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;
    })
    .catch(error => {
      console.error("Error loading navbar:", error);
    });
});
