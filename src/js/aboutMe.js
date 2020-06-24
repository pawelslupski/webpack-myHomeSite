const button = document.querySelector('.action--js');

const myClick = () => {
  const introHeader = document.querySelector('.intro__header');
  introHeader.innerHTML = 'I am Paweł ... Słupski Paweł';
}

button.addEventListener('click', myClick);

