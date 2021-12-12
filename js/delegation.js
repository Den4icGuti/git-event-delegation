const container = document.querySelector('.js-buttons');


container.addEventListener('click', onButtonsClick);




function onButtonsClick(event) { 
  
  if (event.target.nodeName !== 'BUTTON') { 
    return;
  }
   console.log(event.target.nodeName)
  // console.log(event.target.textContent)
   
}
const buttonRef = document.querySelector('.js-button');
let countBtn = 0;

buttonRef.addEventListener('click', onCreateNewButton);

function onCreateNewButton() { 

  const newButton = document.createElement('button');
  newButton.textContent = `Новая кнопка ${countBtn}`;
  newButton.type = 'button';
  newButton.style.marginLeft = '10px';
  newButton.style.marginTop = '10px'
 
  container.appendChild(newButton);
  
  countBtn += 1;
}