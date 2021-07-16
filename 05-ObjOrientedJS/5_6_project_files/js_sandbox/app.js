// ES6 CLASSES - COMPATIBLE IN ALMOST ALL MODERN BROWSERS SO WON'T NEED TO COMPILE DOWN
// NORMAL class SYNTAX HERE, NOT A SPECIAL FUNCTION LIKE IT USED TO BE IN ES5
// FUNCTIONALITY IS BASICALLY THE SAME (USES PROTOTYPES BEHIND THE SCENES) BUT THE SYNTAX IS MUCH BETTER AND SIMILAR TO OTHER PROGRAMMING LANGUAGES
// BL NOTE: LOVE THIS. IGNORE ES5 SYNTAX UNLESS WORKING WITH OLD CODEBASE

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

console.log(mary);

console.log(Person.addNumbers(1,2));