// CONSTRUCTORS AND THE 'THIS' KEYWORD

// NOTE 1 - SECTIONS 5.1 THRU 5.5 COVER THE OLD ES5 CLASS SYNTAX.  SECTION 5.6 THRU 5.7 COVERS THE NEW ES6 CLASS SYNTAX.
// NOTE 2 - IN JS, CLASSES ARE JUST SPECIAL TYPES OF FUNCTIONS. CAN USE EITHER 'function' OR SPECIAL TERM 'class'

// PERSON CONSTRUCTOR
// class Person(name, dob) {  // either of these will work
function Person(name, dob) {  // either of these will work
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970); // calculate age
  }
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
