let nl = '\n';

// Create an object
{
    const person = {
        fName: "First name",
        lName: "Last name"
    };
    // Using the new keyword
    const p2 = new Object({
        fName: "First name",
        lName: "Last name"
    });
}

// Using Object.assign()
{
    const person = {
        fn: "First name",
        ln: "Last name",
    };

    const user1 = {
        fn: "Mike",
        ln: "Done",
    };

    Object.assign(person,user1);

    console.log("Ojbect.assign():", person.fn, person.ln);
    user1.fn = "Ali";
    console.log("Ojbect.assign():", person.fn, person.ln);
}

// Using Object.create()
{
    const person = {
        fName: "First name",
        lName: "Last name"
    }

    const p1 = Object.create(person);
    console.log("Object.create():",p1.fName);
    p1.fName = "Change first name";
    console.log("Object.create():",person.fName);
    console.log("Object.create():",p1.fName);
}

// Using Object.fromEntries()
{
    const users = [
        ["260101100", "Ali Khan"],
        ["260101101", "Azad Khan"],
        ["260101102", "Bolu Khan"],
        ["260101103", "Chad Khan"],
    ];

    const objUsers = Object.fromEntries(users);
    for([x,y] of Object.entries(objUsers)){
        console.log("ID:",x,"Name:",y);
    }
}

// Object Constructor Function
{
    function user(fn, ln, age, email, id, role) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
        this.email = email;
        this.id = id;
        this.role = role;
    }

    const customer = new user("Ali", "Alom", 22, "ali@gmail.com", 260101100, 'customer');

    console.log("Name:",customer.firstName,customer.lastName,"\nAge:",customer.age,"\nEmail:",customer.email,"\nCategory:",customer.role,"\nId:",customer.id);
}
// Object Destructuring
{
    const person = {
        fName: "First name",
        lName: "Last name"
    }

    var {fName, lName} = person;
    console.log("Destructuring:",fName,lName);
    
    // object default value
    var {fName, lName, country='BD'} = person;
    console.log("Destructuring:",fName,lName,"\nCountry:",country);
    
    // Object Property Alias
    var {fName:firstName, lName:lastName, country='BD'} = person;
    console.log("Destructuring:",fName,lName,"\nCountry:",country);

}
let name = "AliKhanShci";
let [a1, a2, a3] = name;
console.log(a1, a2, a3);