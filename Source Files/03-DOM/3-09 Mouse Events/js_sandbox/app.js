// ASSIGN BUTTONS TO VARIABLES
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// TESTING MOUSE EVENTS ON THE BUTTON
// clearBtn.addEventListener('click', runEvent);  // CLICK
// clearBtn.addEventListener('dblclick', runEvent); // DOUBLECLICK
// clearBtn.addEventListener('mousedown', runEvent);  // MOUSEDOWN
// clearBtn.addEventListener('mouseup', runEvent);  // MOUSEUP
// TESTING MOUSE EVENTS ON THE CARD
// card.addEventListener('mouseenter', runEvent); // MOUSEENTER - ONLY ON MAIN OBJECT AND IGNORES CHILD OBJECTS
// card.addEventListener('mouseleave', runEvent); // MOUSELEAVE - ONLY ON MAIN OBJECT AND IGNORES CHILD OBJECTS
// card.addEventListener('mouseover', runEvent);  // MOUSEOVER - TAKES INTO ACCOUNT CHILD OBJECTS AS WELL
// card.addEventListener('mouseout', runEvent); // MOUSEOUT - TAKES INTO ACCOUNT CHILD OBJECTS AS WELL
card.addEventListener('mousemove', runEvent); // MOUSEMOVE

// EVENT HANDLER
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}