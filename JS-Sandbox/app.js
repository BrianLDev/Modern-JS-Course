
// WINDOW METHODS / OBJECTS / PROPERTIES
// NOTE - default alerts/prompts/confirm are ugly, so they're usually prettied up with a Bootstrap alert or something like that.  But this demonstrates functionality.


// CONSOLE LOG
// window.console.log("log 1");
// console.log("log 2");  // console.log is part of the window class

// ALERTS
// window.alert("Hello world!");
// alert("Hello world!"); // same with alert

// PROMPT
// const input = prompt();
// alert(input);

// CONFIRM
// if(confirm('Are you sure?')) {
//   console.log("clicked OK");
// } else {
//   console.log("clicked Cancel");
// }

// PROPERTIES
let val, val1, val2;
// Outer height and width (including scrollbars and other stuff)
// val1 = window.outerWidth;
// val2 = window.outerHeight;

// Inner height and width (excluding scrollbars and other stuff - usable space)
// val1 = window.innerWidth;
// val2 = window.innerHeight;

// Scroll points (values on x/y scroll axis - doesn't seem to be working w/ safari browser)
// val1 = window.scrollX;
// val2 = window.scrollY;

// console.log(val1 + " x " + val2);

// LOCATION OBJECT (stores a lot of data about the URL)
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// REDIRECT
// window.location.href = "http://google.com"

// RELOAD
// window.location.reload();

// HISTORY OBJECT
// window.history.go(-1);  // goes to previous website
// window.history.go(-6); // goes to the 6th site in previous history

// NAVIGATOR OBJECT (stores a lot of data about the browser. Built on top of original Netscape Navigator)
val = window.navigator
val = window.navigator.appName; // Always Netscape
val = window.navigator.appVersion;
val = window.navigator.platform; // Windows or Mac
val = window.navigator.language;

console.log(val);