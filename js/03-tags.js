const tagsContainerRef = document.querySelector('.js-tags');

let selectTag = new Set();

tagsContainerRef.addEventListener('click', onTagsClickTag);

function onTagsClickTag(event) { 
  if (event.target.nodeName !== 'BUTTON') { 
    return;
  }
  //  event.target.classList.toggle('tags__btn--active')

  // selectTag.push(event.target.dataset.value)
 
  // const curentActiveBtn = document.querySelector('.tags__btn--active');

  // if (curentActiveBtn) { 
  //   curentActiveBtn.classList.remove('tags__btn--active')
  // }
   
  // const nexActiveBtn = event.target;
  // nexActiveBtn.classList.add('tags__btn--active')

  const btn = event.target;

  const tag = btn.dataset.value;

  const isActive = btn.classList.contains('tags__btn--active');

  if (isActive) {
    selectTag.delete(tag)
  } else { 
   selectTag.add(tag)
  }
  
  btn.classList.toggle('tags__btn--active')
  console.log(selectTag)
}