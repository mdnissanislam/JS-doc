// Generate dynamic code
{
    console.log(`Generate dynamic code:`);
    const fn = new Function('a', 'b', 'return a + b');
    console.log(`Generate dynamic function result: ${fn(2,3)}`);
}
// Modify Objects
{
    console.log(`Modify Objects:`);
    // Create an Object
    const person = {name: "John", age: 41};

    console.log(`Modify object(before): ${person.name}`);
    // Define "name" to return "secret"
    Object.defineProperty(person, "name", {
    get() { return "secret"; }
    });

    console.log(`Modify object(after): ${person.name}`);
}
// Proxy Meta Programming
{
    console.log(`Proxy Meta Programming:`);
    // A user object is wrapped in a Proxy
    // The Proxy uses a set() trap to log whenever a property is set

    // Create an Object
    const user = {name: "Jan", age: 40};

    // Wrap the Object in a Proxy
    const proxy = new Proxy(user, {
    // Use a set trap
    set(target, property, value) {
        // Log changes
        log(property + ": " + value);
        return target[property];
    }
    });

    function log(message) {
        console.log(message);
    }

    // Change Properties
    proxy.name = "John";
    proxy.age = 45;
    proxy.name = "Paul";
}
// Proxy with Reflect
{
    console.log(`Proxy with Reflect:`);
    // A user object is wrapped in a Proxy
    // The Proxy uses a set() trap to log whenever a property is set
    // The set trap uses Reflect.set() for safe forwarding
    // Create an Object
    const user = {name: "Jan", age: 40};

    // Wrap the Object in a Proxy
    const proxy = new Proxy(user, {
    // Use a set trap
    set(target, property, value) {
        // Log changes
        log(property + ": " + value);
        return Reflect.set(target, property, value);
    }
    });

    function log(message) {
        console.log(message);
    }

    // Change Properties
    proxy.name = "John";
    proxy.age = 45;
    proxy.name = "Paul";
}
// JS Reflect
{
    console.log(`JS Reflect :`);
    const person = {
        name: "JD",
        lastName: "Johden"
    }
    // Reflect.has()
    {
        let answer = Reflect.has(person, "name");
        // Same as using the in operator
        // let answer = "name" in person;
        console.log(`Reflect.has(): ${answer}`);
    }
    // Reflect.deleteProperty()
    {
        Reflect.deleteProperty(person, "name");
        let answer = Reflect.has(person, "name");
        // Same as using the delete operator
        // delete person.name;
        console.log(`name in person: ${answer}`);
    }
    // Reflect.ownKeys()
    {
        const sym = Symbol("secret");
        const obj = {a:1, [sym]: 2};

        let keys = Reflect.ownKeys(obj);

        keys.forEach(myF);

        function myF(value, index, arr) {
            let type = typeof arr[index];
            if(type != "symbol"){
                console.log(`${type}: ${value}`);
            }
        }
    }
    // Reflect.set()
    {
        Reflect.set(person, "name", "JD");
        // Same as:
        // person.name = 'JD';
        console.log(`Reflect.set(): ${Reflect.get(person, "name")}`);
    }
    // Reflect.apply()
    {
        function greet(x){
            return x + ", " + this.name;
        }
        let message = Reflect.apply(greet, person, ["Hello"]);
        // Same as using greet.apply()
        // let message = greet.apply(person, ["Hello"]);
        console.log(`Reflect.apply(): ${message}`);
    }
    // Reflect.construct()
    {
        const color = Reflect.construct(Array, ["red","green","blue"]);
        // Same as the new keyword:
        // const color = new Array(["red","green","blue"]);
        console.log(`Reflect.construct(): ${color}`);
    }
    // Reflect.defineProperty()
    {
        // Object.defineProperty() returns the target object
        // Reflect.defineProperty() returns true or false
        // add property
        Reflect.defineProperty(person, "email", {
            value: "demo@gmail.com"
        });
        console.log(`Reflect.defineProperty(): ${Reflect.get(person, "email")}`);
        // Same as using Object.defineProperty()
        let istrue = Object.defineProperty(person, "country", {
            value: "USA",
            writable: false
        });
        console.log(`Object.defineProperty(): ${Reflect.get(person, "country")} ${istrue.email}`);
    }
    // Reflect.set()
    {
        Reflect.set(person, "name", "JD");
        // Same as using the in operator
        // person.name = 'JD';
        console.log(`Reflect.set(): ${Reflect.get(person, "name")}`);
    }
    // Reflect.set()
    {
        Reflect.set(person, "name", "JD");
        // Same as using the in operator
        // person.name = 'JD';
        console.log(`Reflect.set(): ${Reflect.get(person, "name")}`);
    }
    // Reflect.set()
    {
        Reflect.set(person, "name", "JD");
        // Same as using the in operator
        // person.name = 'JD';
        console.log(`Reflect.set(): ${Reflect.get(person, "name")}`);
    }
    
    
}