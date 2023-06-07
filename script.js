const btn = document.querySelector('.contacts__btn');
const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal__wrapper');

btn.addEventListener('click', () => {
  modal.classList.toggle('modal--active');
})

modal.addEventListener('click', () => {
  modal.classList.toggle('modal--active');
})

modalWrapper.addEventListener('click', (e) => {
  e.stopPropagation();
})