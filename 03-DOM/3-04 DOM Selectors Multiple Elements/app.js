// document.getElementsByClassName - note the plural Elements

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// NOTE - TO LIMIT THE SCOPE OF GETELEMENTS, YOU CAN USE A QUERY SELECTOR TO FIRST GET THE PARENT OBJECT WHICH WILL LIMIT GETELEMENTS TO THE SUB-OBJECTS

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// NOTE - YOU CAN MAKE THE EXACT SAME CHANGES LOOKING SOMETHING UP BY TAG NAME AS BY CLASS NAME.  TWO WAYS TO DO THE SAME THING.

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // CONVERT HTML COLLECTION INTO ARRAY - ALLOWS YOU TO USE ARRAY METHODS LIKE .REVERSE AND FOREACH
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// QUERY SELECTOR ALL - ALLOWS SELECTING MULTIPLE OBJECTS USING QUERY SELECTOR (STANDARD QUERY SELECTOR ONLY RETURNS FIRST OBJECT)
// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

// NOTE - DON'T HAVE TO CONVERT QUERY SELECTORS TO AN ARRAY SINCE IT RETURNS A NODE LIST WHICH ALLOWS FOR ARRAY FUNCTIONS LIKE .FOREACH AND .REVERSE.

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

// EXAMPLE: CHANGE BACKGROUND COLOR OF LIST SO THAT ODD AND EVEN NUMBERS HAVE DIFFERENT SHADES OF GRAY.  CAN USE EITHER .FOREACH OR A STANDARD FOR LOOP.

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}


console.log(items);
