let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// GET CHILD NODES
// NOTE - QUIRK ABOUT CHILDNODES: THEY ALSO INCLUDE THE CARRIAGE RETURN BETWEEN OBJECTS AS A SEPARATE OBJECT (TEXT).  USING .CHILDREN (BELOW) IS BETTER SINCE IT DOESN'T INCLUDE THE CARRIAGE RETURNS AS TEXT OBJECTS.
// NOTE - .CHILDNODES RETURNS A NODE LIST, BUT .CHILDREN (BELOW) RETURNS AN HTML COLLECTION.
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// NODETYPE CODES:
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// GET CHILDREN ELEMENT NODES
// NOTE - .CHILDNODES (ABOVE) RETURNS A NODE LIST, BUT .CHILDREN RETURNS AN HTML COLLECTION.  
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// FIRST CHILD
val = list.firstChild;  // this might give you a worthless text element (carriage return spacer)
val = list.firstElementChild; // this will give you the actual first element and ignore text carriage return elements

// LAST CHILD
val = list.lastChild;  // this might give you a worthless text element (carriage return spacer)
val = list.lastElementChild; // this will give you the actual first element and ignore text carriage return elements

// COUNT CHILD ELEMENTS
val = list.childElementCount;

// GET PARENT NODE
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// GET NEXT SIBLING
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// GET PREV SIBLING
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);