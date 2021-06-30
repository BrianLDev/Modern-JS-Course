// ASSIGN ELEMENTS TO VARIABLES
const form = document.querySelector('form');  // usually want to be more specific and use id, but since we only have 1 form this is OK
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// CLEAR INPUT
taskInput.value = '';

// CREATE AN EVENT LISTENER ON THE FORM - SUBMIT EVENT
// form.addEventListener('submit', runEvent);

// CREATE EVENT LISTENERS ON THE TASK INPUT FIELD - NOTE: THIS DISABLES TYPING INPUT ON SAFARI
// taskInput.addEventListener('keydown', runEvent);   // Keydown - triggers every time a key is pressed in the input field
// taskInput.addEventListener('keyup', runEvent);     // Keyup
// taskInput.addEventListener('keypress', runEvent);  // Keypress
// taskInput.addEventListener('focus', runEvent);     // Focus - triggers when the element becomes the focus (clicked on)
// taskInput.addEventListener('blur', runEvent);      // Blur - triggers when you click OUTSIDE of an element (not focus)
// taskInput.addEventListener('cut', runEvent);       // Cut
// taskInput.addEventListener('paste', runEvent);     // Paste
// taskInput.addEventListener('input', runEvent);     // Input - any interaction with the input (like typing)

// CREATE AN EVENT LISTENER ON THE SELECT FIELD
select.addEventListener('change', runEvent);       // Change - Can't see select list with Materialize UI so comment that out when testing this


// EVENT CALLED BY EVENT LISTENERS ABOVE
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(`INPUT TEXT: ${taskInput.value}`);  // LOG THE VALUE THAT WAS ENTERED IN THE TEXT FIELD
  console.log(`TARGET VALUE: ${e.target.value}`);   // LOG THE VALUE THAT WAS ENTERED IN THE EXT FIELD

  // heading.innerText = e.target.value;  // OVERRIDE THE HEADING VALUE WITH WHATEVER WE TYPE IN (TEST)

  // e.preventDefault(); // prevents default behavior redirect to action="index.php" when click ADD TASK (usually want to use this when handling submit via JS).  NOTE: This also cancels out typing input when using keyboard event listeners
}