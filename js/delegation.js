const buttonsRef = document.querySelector('.js-buttons');

buttonsRef.addEventListener('click', onButtonsClick);

function onButtonsClick(event) { 
  
  if (event.target.nodeName !== 'BUTTON') { 
    return;
  }
   console.log(event.target.nodeName)
  // console.log(event.target.textContent)
}