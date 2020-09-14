console.log("Welcome to ES6 Study I!");
console.log("Let's learn with Ken the Ninja!");

let length=5;
console.log (length);
console.log (length*length*3);

// Output the result of 5 plus 3
console.log (5+3);
// Output the result of 20 minus 8
console.log (20-8);
// Output the string "4 + 5"
console.log ("4+5");

// Output the result of 8 times 4
console.log (8*4);
// Output the result of 24 divided by 4
console.log (24/4);
// Output the remainder after dividing 7 by 2
console.log (7%2);

// Output the combination of "Master " and "White"
console.log ("Master "+"White");
// Output the combination of "20" and "15" (as a single string)
console.log ("20"+"15");

// Declare the name variable with the string value "Ken the Ninja"
let name="Ken the Ninja";
// Output the value of the name variable
console.log (name);

// Declare the length variable
let length=5;
// Output the value of the length variable
console.log (length);
// Use the length variable to output the circle's area
console.log (length*length*3);

let name = "Ken the Ninja";
console.log(name);
// Update the name variable with the value "Birdie"
name = "Birdie";
// Output the value of the name variable
console.log (name);

let number = 7;
console.log(number);
// Add 3 to the value of the number variable
number+=3;
console.log(number);
// Divide the value of the number variable by 2
number/=2;
console.log(number);

// Declare the language constant
const language = "French";
// Output the value of the language constant
console.log (language);
// Use the language constant to output "I can speak ____"
console.log ("I can speak"+language);

const name = "Ken the Ninja";
const age = 14;
// Output the string "My name is ____"
console.log (`My name is${name}`);
// Output the string "Today I am ____ years old"
console.log (`Today I am${age}years old`);

const level = 12;
// Add an if statement with the condition: level > 10
if(level > 10) {
  console.log ("Your level is higher than 10");
}

const age = 24;
// Output the result of age >= 18
console.log(age >= 18);
// Output the result of age < 18
console.log(age < 18);
// When the value of age is 18 or greater, output "I am 18 or older"
if (age >= 18) {
  console.log("I am 18 or older");
}

const password = "kentheninja";
// When the value of password is "kentheninja", output "Signed in successfully"
if (password ==="kentheninja"){
  console.log("Signed in successfully");
}
// When the value of password is not "kentheninja", output "Wrong password"
if (password !=="kentheninja"){
  console.log("Wrong password");
}

const age = 17;
// When the condition is not met, output "I am under 18 years old"
if (age >= 18) {
  console.log("I am 18 or older");
} else {
  console.log ("I am under 18 years old");
}

const age = 17;
// When age is 10 or more but less than 18, output:
// "I am under 18 but over 9 years old"
if (age >= 18) {
  console.log("I am 18 or older");
} else if (age >= 10) {
    console.log("I am under 18 but over 9 years old");
} else {
    console.log ("I am Under 10 years old");
}

const age = 24;
// Add an if statement with the specified conditions
if (age>=20&&age<30) {
  console.log ("I am in my 20s");
}

const rank = 2;
switch (rank) {
  case 1:
    console.log("You won a gold medal!");
    break;
  // Add a case for when rank is 2
  case 2:
    console.log ("You won a silver medal!");
    break;
  // Add a case for when rank is 3
  case 3:
    console.log ("You won a bronze medal!");
    break;  
}

const rank = 5;
switch (rank) {
  case 1:
    console.log("You won a gold medal!");
    break;
  case 2:
    console.log("You won a silver medal!");
    break;
  case 3:
    console.log("You won a bronze medal!");
    break;
  // Add a default case
  default:
  console.log("Better luck next time");
  break;  
}

// Declare the number variable
let number=1;
// Print the value of the number variable, then add 1 to it
console.log (number);
number+=1;
console.log (number);
number+=1;
// Copy the 2 lines above and paste them 4 times below
console.log (number);
number+=1;
console.log (number);
number+=1;
console.log (number);
number+=1;

// Declare the number variable
let number =1;
// Add a while loop here
while (number <= 100) {
  console.log (number);
  number +=1;
}

// Use a for loop to print numbers from 1 to 100
for (let number=1; number <= 100; number++) {
  console.log (number);
}

// Complete the for loop
for (let number = 1;number <= 100; number ++) {
  // Use an if statement to print "Multiple of 3" when number is a multiple of 3 
if (number %  3 === 0) {
 console.log ("Multiple of 3");
} else {
  console.log (number);
}
}

const greet = function() {
  console.log("Hello!");
  console.log("Let's study functions!");
};
// Call the function here
greet();

// Assign a function to the hello constant
const hello = function() {
  console.log("Hello!");
  console.log("I am Ken the Ninja");
};
// Call the function assigned to the hello constant
hello();

// Define the animal constant
const animal = {
  name: "Leo",
  age: 3,
  greet: () => {
    console.log("Hello");
  }
};
// Print the name property of the animal constant
console.log(animal.name);
// Call the animal's greet method property
animal.greet();

class Animal {
}
// Assign the Animal class instance to the animal constant
const animal = new Animal();
// Output the value of the animal constant
console.log(animal);

const dog = new Dog("Leo", 4, "Chihuahua");
dog.info();
// Paste the Animal class definition below
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello");
  }
  info() {
    this.greet();
    console.log(`This is ${this.name}`);
    console.log(`He is ${this.age}`);
  }
}
// Paste the Dog class definition below
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  info() {
    this.greet();
    console.log(`My name is ${this.name}`);
    console.log(`I am a ${this.breed}`);
    console.log(`I'm ${this.age} years old`);
    const humanAge = this.getHumanAge();
    console.log(`I am ${humanAge} years old in human years`);
  }
  getHumanAge() {
    return this.age * 7;
  }
}
// Import the Dog class
import Dog from "./dog";
const dog = new Dog("Leo", 4, "Chihuahua");
dog.info();
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello");
  }
  info() {
    this.greet();
    console.log(`My name is ${this.name}`);
    console.log(`I'm ${this.age} years old`);
  }
}
// Export the Animal class
export default Animal;

const characters = ["Ken the Ninja", "Ben the Baby Ninja", "Master White"];
console.log(characters);
// Add the string "Birdie" to the characters array with the push method
characters.push("Birdie");
// Print the characters array
console.log(characters);

const printKen = () => {
  console.log("Ken the Ninja");
};
const printMaster = () => {
  console.log("Master White");
};
const call = (callback) => {
  console.log("Calling the callback function.");
  callback();
};
// Rewrite the argument as printMaster and confirm the output
call(printMaster);





