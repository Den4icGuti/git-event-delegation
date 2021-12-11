const elements = {
  parentRef: document.querySelector('.js-parent'),
  childRef: document.querySelector('.js-child'),
  innerChildRef: document.querySelector('.js-innner-child'),
};

const { parentRef, childRef, innerChildRef } = elements;

parentRef.addEventListener('click', onClickParent);
childRef.addEventListener('click', onChildClick);
innerChildRef.addEventListener('click', onInnerChildClick);

function onClickParent(event) { 
  console.log('onParentClick')
  console.log('event.parent ->', event.target)
  console.log('event.parent ->',event.currentTarget)
}

function onChildClick(event) { 
  console.log('onChildClick')
  console.log('event.child ->', event.target)
  console.log('event.child ->',event.currentTarget)
}

function onInnerChildClick(event) { 
  console.log('onInnerChildClick')
  console.log('event.inner-child ->', event.target)
  console.log('event.inner-child ->',event.currentTarget)
}

