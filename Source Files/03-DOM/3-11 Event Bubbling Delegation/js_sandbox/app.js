// EVENT BUBBLING - IF AN EFFENT IS TRIGGERED, IT "BUBBLES UP" TO THE PARENT OF THE ELEMENT

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// THE 3 EVENTS BELOW ARE ON THE PARENT OBJECT AND THEY WILL AUTOMATICALLY TRIGGER WHEN THE ABOVE EVENT FIRES
// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });


// EVENT DELGATION - OPPOSITE OF BUBBLING: PARENT OBJECT DELEGATES EVENT DOWN TO A CHILD ELEMENT
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}