const hideBtn = document.getElementById('hideBtn');
const card = document.querySelector('.card');
const showBtn = document.getElementById('showBtn');
showBtn.style = 'display:none';
hideBtn.addEventListener('click', () => {
  card.style.animation = 'hideCard 1s forwards';
  showBtn.style = 'display:visible';
  showBtn.style.animation = 'showBtn 1s forwards';
});
showBtn.addEventListener('click', () => {
  card.style.animation = 'showCard 1s forwards';
  showBtn.style.animation = 'hideBtn 1s forwards';
  setTimeout(function() {
    showBtn.style = 'display:none';
  }, 1000);
});
