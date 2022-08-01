export function domInit(){
  console.log("이닛");
  const body = document.querySelector('body');
  const element = document.createElement('div');
  element.innerHTML = 'Dom이 로드 되었습니다.';
  element.style.color = '#ff4949';
  element.style.fontSize = '40px';
  body.appendChild(element);
}
