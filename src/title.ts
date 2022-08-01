export function titleChange(){
  const title = document.querySelector('.title');

function clickHandler(){
  title.classList.add('is-active');
}

title.addEventListener('click', clickHandler);
}