let nl = '\n';
// // Adding or changing an object property
// Object.defineProperty(object, property, descriptor)
{
    // Adding a new property
    const person = {
        fn: "Alu",
        ln: "Ka",
        age: 22
    };

    console.log(person.age);
    Object.defineProperty(person, "age", {value: 23});
    // Object.defineProperty(object name, "property name", {value: 22});
    console.log(person.age);

    // Now can't changed property value
    Object.defineProperty(person, "age", {writable:false});
    person.age = 22; // This is not work

    // Now can changed property value
    Object.defineProperty(person, "age", {value: 24}); // This is now work
    console.log(person.age);
    
    // You can't configure age property
    Object.defineProperty(person, "age", {configurable:false});
    // Object.defineProperty(person, 'age', {value: 22});
    Object.defineProperty(person, 'ln', {value: "Hossain"});

    Object.defineProperty(person, 'age', {enumerable: "true"});

    // Changing a property value
    for(let key in person) {
        console.log(key);
    }

    // Add getter
    Object.defineProperty(person, "fullName", {get: ()=>{
        this.fn + " " + this.ln;
    }});

}

// // Adding or changing object properties
console.log("Object.defineProperties(object, descriptors):");
{
    const person = {
        fn : "Ali",
        ln : "Khan",
        age : 11
    }

    Object.defineProperties(person, { city: { value:"Dhaka"}, country: {value:"Bangladesh"} });
    console.log(person.city);
}

// // Accessing a Property
console.log("Object.getOwnPropertyDescriptor(object, property):");
{
    const person = {
        fn : "Ali",
        ln : "Khan",
        age : 11
    }
}

// // Accessing Properties
// Object.getOwnPropertyDescriptors(object)
{
    const person = {
        fn : "Ali",
        ln : "Khan",
        age : 11
    }

    let arr = Object.getOwnPropertyDescriptors(person);
    console.log(arr);
}

// // Returns all properties as an array
// Object.getOwnPropertyNames(object)
{
    const person = {
        fn : "Ali",
        ln : "Khan",
        age : 11
    }

    let arr = Object.getOwnPropertyNames(person);
    // console.log(arr);
}

// // Accessing the prototype
// Object.getPrototypeOf(object)
{
    const person = {
        fn : "Ali",
        ln : "Khan",
        age : 11
    }
}

console.log("\nJavaScript Getters and Setters:")
// get
{
    // Example-01:
    const person1 = {
        fn: "Ali",
        ln: "Khan",
        get name () {
            return this.fn + " " + this.ln;
        }
    }
    console.log(person1.name);

    // Example-02:
    const person2 = {
        fn: "Ali",
        ln: "Khan",
        name: function() {return this.fn + " " + this.ln}
    }
    console.log(person2.name());
}

// set
{
    const welcome = {
        txt: '',
        get getWelcome () {
            return this.txt;
        },
        set setWelcome (value) {
            this.txt = "Welcome, " + value;
        }
    }

    welcome.setWelcome = "Ali Khan";
    
    console.log(welcome.getWelcome);
}