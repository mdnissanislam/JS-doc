// Syntax
// There are two ways to access properties: dot notation and bracket notation.
// const object = {
//     get propertyName() {}
// }
// object.propertyName; using dot notation
// object[propertyName]; using bracket notation

class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    get userEmail(){
        return this.email;
    }
    
    get userName(){
        return this.name;
    }
}

const person = new User ("Black", "Demo@gmail.com");
console.log("Dot notation");
console.log(person.userEmail); // dot notation
console.log(person['userEmail']); // bracket notation
console.log(person.email);

// name
console.log("Hi I am " + person.name);
console.log(`Hi I am  ${person.name}. Output from function ${person.userName}`);

