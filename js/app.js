const imgs = document.querySelectorAll(".propiedad__imagen");

window.addEventListener("scroll", () => {
  const scroll = this.scrollY / -20;

  imgs.forEach((img) => {
    img.style.backgroundPositionY = `${scroll}px`;
  });
});
