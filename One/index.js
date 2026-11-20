// JavaScript is a programming language used to make websites interactive. You’ll learn by writing code and experimenting.
// ---------------------------
// Variables
// Variables store data (like numbers, text, etc.).



// let variableName = value; // let for variables that can change
// const constantName = value; // const for values that won't change
// var oldVariable = value; // var is older, avoid it
console.log(`Variables: `);
let name = "Alice";
const age = 25;
console.log(name, age); // Outputs: Alice 25
name = "Bob"; // OK: let allows reassignment
// age = 30; // Error: const cannot be reassigned

// ---------------------------
// Data Types
// JavaScript has several data types:
// String: Text, e.g., "Hello" or 'World'

// Number: Integers or decimals, e.g., 42, 3.14

// Boolean: true or false

// Array: List of items, e.g., [1, 2, 3]

// Object: Key-value pairs, e.g., { name: "Alice", age: 25 }
console.log(`\n`);
console.log(`Data types: `);
let text = "Hello";
let number = 100;
let isActive = true;
let numbers = [1, 2, 3];
let person = { name: "Alice", age: 25 };
console.log(`${text}\nData type: ${typeof text}\n${number}\nData type: ${typeof number}\n${isActive}\nData type: ${typeof isActive}\n${numbers}\nData type: ${typeof numbers}\n${person}\nData type: ${typeof person}`);
// To get the range of the number type, you use Number.MIN_VALUE and Number.MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE); // 5e-324

// Also, you can use Infinity and -Infinity to represent the infinite number.
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE) // -Infinity

console.log(`\n`);

// ---------------------------
// Basic Operations
// Arithmetic +, -, *, /, %
console.log(`Operators: `);
let sum = 10 + 5; // 15
let product = 10 * 2; // 20
console.log(sum, product);

// String Concatenation
console.log(`String concatenation: `);
let greeting = "Hello, " + "World!"; // "Hello, World!"
console.log(greeting);
console.log(`\n`);

// ---------------------------
// Control Flow
console.log(`Control Fnlow`);
// Conditionals (if/else)
// Run code based on conditions.

let age2 = 18;
if (age2 >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote yet.");
}

//  Loops
console.log(`Loops: `);
// Repeat code multiple times.
console.log(`For loop: `);
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}

// While Loop
console.log(`While loop: `)
let count = 0;
while (count < 3) {
  console.log(count); // Outputs: 0, 1, 2
  count++;
}

// ---------------------------
// Functions
console.log(`Function: `);
// Functions are reusable blocks of code.
// Syntax
function functionName(parameter1, parameter2) {
  // Code to run
  return result; // Optional
}

// Arrow Functions (Modern shorthand)
console.log(`Arrow Functions: `);
const add = (a,b) => a+b;
console.log(add(3,4)); // outputs: 7
console.log(`\n`);

// ---------------------------
// Array and Objects
// Array
console.log(`Array: `);
// Array store lists of data
let fruits = ["apple", "banana", "orange"];
console.log(`Access first elements: ${fruits[0]}`); // aple

// Add to end
fruits.push(`grape`);
console.log(`All fruits: ${fruits}`);
// outputs using foreach
fruits.forEach(fruit => console.log(fruit));
// Objects
// Objects store key-value pairs
console.log(`Objects: `);
let person1 = {
  name: "Alice",
  age: 25,
  greet: function() {
    return "Hi, I'm " + this.name;
  }
};
console.log(person1.name); // Alice
console.log(person1.greet()); // Hi, I'm Alice
console.log(`\n`);

// ---------------------------
// Error Handling
// Handle errors to prevent crashes.
try {
  let result = undefinedVariable; // This will cause an error
} catch (error) {
  console.log("An error occurred:", error.message);
}
console.log(`\n`);

// ---------------------------
// Practice Projects
console.log(`Simple Calculator: `);
function calculator(a, b, operation) {
    if(operation === "add") return (a + b);
    if(operation === "subtract") return (a - b);
    return "Invalid operation"
}
console.log(`5 + 5 = ${calculator(5, 5, "add")}`);
console.log(`5 - 5 = ${calculator(5, 5, "subtract")}`);
console.log(`\n`);

// ---------------------------
// To-Do List
let tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log(`Task add: ${task}`);
}
function showTask() {
    tasks.forEach((task, index) => console.log(`${index+1}. ${task}`));
}

addTask(`Learn JavaScript`);
addTask(`Learn HTML`);
showTask();
console.log(`\n`);

// ---------------------------
// Asynchronous: 
    // Promises: 
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 1000);
    });
    promise.then(result => console.log(result));

    // Async/Await
    async function fetchData() {
      let result = await new Promise(resolve => setTimeout(() =>resolve("Data"), 1000));
      console.log(result);
    }
    fetchData();
console.log(`\n`);

// ---------------------------
// Modules
export function welcome(){
  return "Welcome to our JavaScript show!"
}
console.log(`\n`);

// ---------------------------

console.log(`\n`);

// ---------------------------
console.log(`\n`);

// ---------------------------
console.log(`\n`);