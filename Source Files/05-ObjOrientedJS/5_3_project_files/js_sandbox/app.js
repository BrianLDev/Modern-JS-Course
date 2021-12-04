// JAVASCRIPT PROTOTYPES
// https://www.w3schools.com/js/js_object_prototypes.asp
// The JavaScript prototype property also allows you to add new methods to objects constructors:

// NOTE 1 - SECTIONS 5.1 THRU 5.5 COVER THE OLD ES5 CLASS SYNTAX.  SECTION 5.6 THRU 5.7 COVERS THE NEW ES6 CLASS SYNTAX.

//Object.prototype
//Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff =  Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff =  Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function(newLastName){
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMaried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));  // check if this property is part of class = True
console.log(mary.hasOwnProperty('getFullName'));  // check if this property is part of class = False
