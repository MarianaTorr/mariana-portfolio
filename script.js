// Overlay e elementos do overlay
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const overlayVideo = document.getElementById("overlay-video");
const close = document.getElementById("close");

// Função para abrir overlay
function openOverlay(src, type) {
  overlay.style.display = "flex";
  if(type === "img") {
    overlayImg.src = src;
    overlayImg.style.display = "block";
    if(overlayVideo) overlayVideo.style.display = "none";
  } else if(type === "video") {
    overlayVideo.src = src;
    overlayVideo.style.display = "block";
    overlayImg.style.display = "none";
  }
}

// Seleciona todas as imagens e vídeos de project-image
document.querySelectorAll(".project-image img, .project-image video").forEach(item => {
  item.addEventListener("click", () => {
    const type = item.tagName === "IMG" ? "img" : "video";
    openOverlay(item.src, type);
  });
});

// Seleciona todas as imagens de presentation-photos
document.querySelectorAll(".presentation-item img").forEach(img => {
  img.addEventListener("click", () => {
    openOverlay(img.src, "img");
  });
});

// Fechar overlay clicando no "×"
close.addEventListener("click", () => {
  overlay.style.display = "none";
  if(overlayVideo) overlayVideo.pause();
});

// Fechar overlay clicando fora do conteúdo
overlay.addEventListener("click", (e) => {
  if(e.target === overlay) {
    overlay.style.display = "none";
    if(overlayVideo) overlayVideo.pause();
  }
});
