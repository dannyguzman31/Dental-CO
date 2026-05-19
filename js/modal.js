const modal = document.getElementById('promoModal');
const openBtn = document.getElementById('openPromoModal');
const closeBtn = document.querySelector('.close-modal');

openBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
