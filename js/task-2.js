const boxesWrapperRef = document.querySelector('#boxes');
const boxesAmountRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('[data-action="create"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');

function getRandomColor() {
  let r = Math.floor(Math.random() * (255 - 0));
  let g = Math.floor(Math.random() * (255 - 0));
  let b = Math.floor(Math.random() * (255 - 0));
  return `rgb(${r}, ${g}, ${b})`;
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const size = 20 + i * 10;
    const boxElement = document.createElement('div');
    boxElement.style.width = `${size}px`;
    boxElement.style.height = `${size}px`;
    boxElement.style.backgroundColor = getRandomColor();
    boxesWrapperRef.appendChild(boxElement);
  }
}

function destroyBoxes() {
  boxesWrapperRef.innerHTML = '';
}

createBtnRef.addEventListener('click', event => {
  createBoxes(boxesAmountRef.value);
});
destroyBtnRef.addEventListener('click', event => {
  destroyBoxes();
});
