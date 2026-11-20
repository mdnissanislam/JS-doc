let nl = '\n';
// Function Declarations
function myFunction(parameters) {}

{
    // A JavaScript function can also be defined using an expression.

    // A function expression can be stored in a variable:
    let sum = (a,b) => a+b;
    console.log(sum(2,2));
}

// The Function() Constructor
{
    const sum = new Function('a', 'b', 'return a + b');
    console.log(sum(4,1));
}

// Self-Invoking Functions
{

    // Function expressions can be made "self-invoking".

    // A self-invoking expression is invoked (started) automatically, without being called.
    (function() {
        let z = 'true';
        console.log(z)
    })();
}

// JavaScript functions have both properties and methods.
{
    // Properties
    function sum (a,b) {
        return arguments.length;
    }

    // Methods
    // The toString() method returns the function as a string:
    console.log(sum.toString());
}

// Invoking a Function with the Constructor
{
    function myFu(a, b) {
        this.fName = a;
        this.lName = b;
    }

    const person = new myFu("Ali", "Khan"); 
    console.log("My name is",person.fName,person.lName);
}

{
//     let one = document.getElementById('one');
//     function onLoad() {
//         one.innerHTML = "One"
//     }
}

// bind(): Creates a New Function (Deferred Execution)
{
    const user = {
        name: 'Rana',
        age: 30,
        // The method we want to borrow/fix the context for
        greet: function(city) {
            // 'this' should refer to the user object
            console.log(`1. bind(): Hello, I'm ${this.name}, and I live in ${city}.`);
        }
    };

    const foreignUser = {
        name: 'Emily'
    };

    // 1. Create a NEW function (boundFunction)
    // We are binding the 'greet' function to the 'foreignUser' object.
    const boundGreet = user.greet.bind(foreignUser, 'Dhaka'); 

    // 2. Call the new function LATER
    // The code runs now, and 'this' inside 'greet' is correctly set to foreignUser.
    boundGreet(); 

    // Hello, I'm Emily, and I live in Dhaka.
}

// call() method Executes Immediately (Individual Arguments)
{
    const person = {
        name: 'Karim',
        getDetails: function(greeting, language) {
            // 'this' should refer to the object passed via call()
            console.log(`2. call(): ${greeting}, I'm ${this.name}. (${language})`);
        }
    };

    const newPerson = {
        name: 'Fatema'
    };

    // Execute immediately, setting 'this' to newPerson and passing arguments individually.
    person.getDetails.call(newPerson, "Assalamu Alaikum", "Bengali");
}

// apply() method: Executes Immediately (Array of Arguments)
{
    const calculator = {
        baseValue: 10,
        add: function(a, b) {
            // 'this' should refer to the object passed via apply()
            console.log(`3. apply(): Result is ${this.baseValue + a + b}`);
            return this.baseValue + a + b;
        }
    };

    const newContext = {
        baseValue: 100 // A different context value
    };

    const numbersToAdd = [20, 5]; // Arguments are passed as an array

    // Execute immediately, setting 'this' to newContext and passing arguments as an array.
    calculator.add.apply(newContext, numbersToAdd);

    // Output: 3. apply(): Result is 125
}

// JavaScript Closures
{
    function myCounter() {
        let counter = 0;
        return () => {
            counter++;
            return counter;
        };
    }

    const increment = myCounter();

    console.log("Increment",increment());
    console.log("Increment",increment());
    console.log("Increment",increment());
    console.log("Increment",increment());
}