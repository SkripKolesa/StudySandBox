console.log("Hell o");
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = [...document.querySelectorAll('img.placeholder')];
  const delayms = 30;
  const randomAmount = 10000;
  const imgLoaderInterval = window.setInterval(() => {
    if (!lazyImages.length){
      window.clearInterval(imgLoaderInterval);
      return;
    }
    const currentImg = lazyImages.shift();
    currentImg.src = `${currentImg.dataset.src}#${Math.trunc(Math.random()*randomAmount)}`;
  }, delayms);

  const cards = [...document.querySelectorAll('.card')];
  let activeCard = cards.find(c => c.classList.contains('active'));
  cards.forEach(card => {
    card.addEventListener('click', () => {
      activeCard.classList.remove('active');
      card.classList.add('active');
      activeCard = card;
    })
  });
});
