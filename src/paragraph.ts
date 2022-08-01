export function clicker(){
  const paragraph = document.querySelector('.paragraph');

function clickHandler(){
  this.classList.add('is-active');
}

paragraph.addEventListener('click', clickHandler)
}