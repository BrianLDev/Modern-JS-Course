// ADD AN EVENT LISTENER WITH INLINE FUNCTION
// document.querySelector('.clear-tasks').addEventListener('click', function(e){ // e is the event object passed back
//   console.log('Hello World');

//   e.preventDefault();
//   alert("cleared!");
// });

// ADD EVENT LISTENER WITH CALL TO A SEPARATE FUNCTION
document.querySelector('.clear-tasks').addEventListener('click', onClick);  // will run the function onClick when event happens

// FUNCTION THAT IS CALLED WHEN .CLEAR-TASKS BUTTON IS CLICKED
function onClick(e){  // e is the event object passed back
  //alert("cleared!");

  let val;
  val = e;  

  // EVENT TARGET ELEMENT
  // e (the event object) stores a lot of variables and parameters within it
  val = e.target; // target represents the element where the action happens, in this case: `a.clear-tasks.btn.black`
  val = e.target.id;  // doesn't have an id so this'll return blank
  val = e.target.className; // `clear-tasks btn black`
  val = e.target.classList; // returns the above 3 classes in list format

  // // EVENT TYPE
  val = e.type; // type = click

  // // TIMESTAMP
  val = e.timeStamp;  // appears to be in milliseconds

  // // COORDS EVENT RELATIVE TO THE WINDOW
  val = e.clientY;  // y position where the event happened relative to the window
  val = e.clientX;  // x pos

  // // COORDS EVENT RELATIVE TO THE ELEMENT (WHERE DID THEY CLICK ON THE BUTTON ITSELF)
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}