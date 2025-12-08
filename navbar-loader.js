document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar-container");

  fetch("navbar.html")
    .then(res => {
      if (!res.ok) throw new Error("Navbar file not found");
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
    })
    .catch(err => {
      console.error("Error loading navbar:", err);
    });
});
