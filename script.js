const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const overlayVideo = document.getElementById("overlay-video");
const close = document.getElementById("close");

document.querySelectorAll(".project-image img, .project-image video").forEach(item => {
  item.addEventListener("click", () => {
    overlay.style.display = "flex";
    if(item.tagName === "IMG") {
      overlayImg.src = item.src;
      overlayImg.style.display = "block";
      overlayVideo.style.display = "none";
    } else {
      overlayVideo.src = item.src;
      overlayVideo.style.display = "block";
      overlayImg.style.display = "none";
    }
  });
});

// Fechar ao clicar no botão "×"
close.addEventListener("click", () => {
  overlay.style.display = "none";
  overlayVideo.pause();
});

// Fechar ao clicar fora da imagem ou vídeo
overlay.addEventListener("click", (e) => {
  if(e.target === overlay) {
    overlay.style.display = "none";
    overlayVideo.pause();
  }
});
