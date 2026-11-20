let newLine = '\n';
{   
    {
        // name:value pairs are also called key:value pairs.
        // object literals are also called object initializers.
        // Create an object
        const person1 = {
            firstName: "Abdul",
            lastName: "Khan",
            age: 22
        }
        console.log(person1);
        // Create an empty object person2 and perosn3
        const person2 = {};
        // or
        // The examples above do exactly the same.
        const person3 = new Object();
        // Add properties in person2 and 3
        person2.firstName = "Ajad";
        person2.lastName = "khan";
        person2.age = 23;
        // person3
        person3.firstName = "Ajad";
        person3.lastName = "khan";
        person3.age = 23;
        console.log(person2);
        // Create an object from an existing object.
        const person4 = Object.create(person3);
        person4.name = "Ali Akbor";
        console.log(person4);   
        // Create an object from a list of key/value pairs.
        const fruits = [
            ["apples", 400],
            ["watermalon", 200],
            ["bananas", 100]
        ]
        const myObj = Object.fromEntries(fruits);
        console.log(myObj);
        console.log(`Apple price is ${myObj.apples}`);
        console.log(`Watermalon price is ${myObj.watermalon}`);
        console.log(`Banana price is ${myObj.bananas}`);
        // Objects written as name value pairs are similar to:
        // Associative arrays in PHP
        // Dictionaries in Python
        // Hash tables in C
        // Hash maps in Java
        // Hashes in Ruby and Perl
    }
    console.log(newLine);
    {
        // Access properties
        // You can access object properties in two ways:
        // objectName.propertyName
        // objectName["propertyName"]
        const person = {
            firstName: "Ali"
        }
        console.log(person.firstName);
        console.log(person["firstName"]);
        // objectName[expression]
        let name1 = "firstName";
        console.log(person[name1]);
    }
    console.log(newLine);
    {
        /*
        Objects are mutable: They are addressed by reference, not by value.
        The object x is not a copy of person4. The object x is person4.
        The object x and the object person4 share the same memory address.
        Any changes to x will also change person4:

        */
        const person4 = new Object();
        person4.age = 33
        const x = person4;
        console.log(person4);
        x.name = "Ali Hossain";
        console.log(person4);
        // Adding new properties
        console.log(`Adding new properties: `);
        x.nationality = "English";
        console.log(`Updated your data: `);
        console.log(x)
        console.log(`Deleting properties: `);
        delete x.nationality;
        console.log(`Updated your data: `);
        console.log(x);
    }
    console.log(newLine);
    {
        // Object.assign(target, source)
        // It's similar to a = b
        // target object
        const person1 = {
            name: "Black",
            age: 22
        }
        console.log(`Before assign: `);
        console.log(person1);
        
        // source object
        const person2 = {
            name: "Hole",
            age: 33
        }
        // Assign source to target
        Object.assign(person1, person2);
        console.log(`After assign: `);
        console.log(person1);
    }
    console.log(newLine);
    {
        // Methods
        console.log(`Object Method: `);
        const person = {
            firstName: "Black",
            lastName: "Hole"
        }
        person.fullName = function() {
            return this.firstName + " " + this.lastName;
        }
        console.log(person.fullName());
    }
    console.log(newLine);
    {
        // Some solutions to display JavaScript objects are:
        // Displaying the Object Properties by name
        // Displaying the Object Properties in a Loop
        // Displaying the Object using Object.values()
        // Displaying the Object using JSON.stringify()
        const person = {
            name: "Black Hole",
            age: 30,
            country: "Bangladesh"
        }
        // Add new property
        person.city = "London";
        // update country 
        person.country = "UK";
        // Displaying the Object Properties by name
        console.log(`Object Properties by name: `);
        console.log(`Person name ${person.name}`); // Black Hole

        // Displaying the Object Properties in a loop
        console.log(`Object Properties in a loop: `);
        let text = "";
        for(let x in person) {
            text += person[x];
        }
        console.log(text); // Black Hole30Bangladesh
        // Displaying the Object.values()
        // Create an array
        console.log(`Object.values(): `);
        const text2 = Object.values(person);
        console.log(text2); // Black Hole, 30, Bangladesh
        console.log('Object.keys(): '); // name, age, country
        const text3 = Object.keys(person);
        console.log(text3);
        console.log(person?.country) // Bangladesh
        let istrue = "name" in person;
        console.log(istrue); // true
        // Displaying the Object.entries()
        console.log(`Object.entries(): `);
        const fruits = {
            Apple: 300,
            Orange: 200,
            Mango: 100
        }
        let text4 = "";
        for(let [fruit, value] of Object.entries(fruits)) {
            text4 += fruit + ": " + value + "\n";
        };
        console.log(Object.entries(person));
        console.log(text4);
        // Displaying the JSON.stringify() return value
        console.log(`JSON.stringify(): `);
        console.log(JSON.stringify(fruits));
    }
    console.log(newLine);
    {
        // Object Destructuring
        console.log(`Object Destructuring: `);
        const person = {
            firstName: `Black`,
            lastName: `Hole`,
            fullName: ()=> firstName + ` ` + lastName
        }
        // Destructuring Assignment
        let {firstName, lastName, fullName} = person;
        console.log(firstName + " " + lastName + " " + fullName());
    }
    console.log(newLine);
    {
        // Object construction and using this keyword
        function person(first, last, age, country){
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.country = country;
        }
        // create a new object
        const man = new person("Abdul","Hassan",22,"Bangladesh");
        const woman = new person("Lili","Moni",22,"Bangladesh");
        console.log(man.age);
        console.log(woman.firstName);
        // Add a property in constructor
        person.prototype['hobby'] = 'Reading';
        console.log(man.hobby);
    }
    console.log(newLine);
    {
        // using this keyword access obj
        console.log(`Using this key: `);
        let person = {
            firstName: 'Black',
            age: 22,
        }
        person.displayObj = function(){
            console.log(this);
        }
        person.displayObj();
    }
    console.log(newLine);
    {
        // for in loop access obj
        console.log(`Obj access using loop: `);
        console.log(`for in: `);
        const person = {
            'first name': `Black Hole`,
            'last name': `Black Hole`
        };
        for(let x in person){
            console.log(`${x}: ${person[x]}`);
        };
        console.log(newLine);
        // for of loop access obj
        console.log(`for of: `);
        for(let x of Object.keys(person)){
            console.log(`${x}: ${person[x]}`);
        };
        for(let x of Object.values(person)){
            console.log(`${x}`);
        };
        console.log(newLine);
        // Object.entries()
        console.log(`forEach():\nObject.entries():`);
        Object.entries(person).forEach(([x,y])=>{
            console.log(`${x}: ${y}`);
        });
    }
    console.log(newLine);
    {
        // Object assign
        // Object.assign
        console.log(`Methods: `);
        console.log(`Object.assign(): `);
        let obj = {
            firstName: 'Black',
            lastName: 'Hole',
            age: 22
        };
        let obj2 = {};
        Object.assign(obj2,obj);
        console.log(`${obj2.firstName}`);
        console.log(`Spread Assign: `)
        let obj3 = {...obj2};
        console.log(obj3);
    }
    console.log(newLine);
    {
        // Object.freeze(obj)
        console.log(`Object.freeze(obj): `);
        const obj = {
            name: "Black",
            age: 22
        }
        Object.freeze(obj); // freeze this obj
        // note: You can't do anything add, delete, update
        delete obj.age; // can't delete age property
        obj.age = 33;
        console.log(obj);
    }
    console.log(newLine);
    {
        // Object.seal()
        console.log(`Object.seal(): `);
        const obj = {
            name: "ali",
            age: 22
        }
        Object.seal(obj); // Only can update values
        obj.newName = 'Hole';
        delete obj.age;
        console.log(obj)
        obj.age = 33;
        console.log(`Update your age: `);
        console.log(obj)
    }
    console.log(newLine);
    {
        // obj.hasOwnProperty(key)
        console.log(`obj.hasOwnProperty(key): `);
        const obj = {
            name: 'Hiya',
            age: 22,
            email: 'demo@gmai.com'
        };
        console.log(`${obj.hasOwnProperty('age')}`);
    }
    console.log(newLine);
}
// Questions:
{
    {
        // Question - 01
        console.log(`Question - 01:
            Create a person object with properties: name, age, and city. Then:
            a> Log each property as: value of 'name' property is 'balck' using loop.
            b> Add a new property called email to the person object.
            c> Delete "city" property from person object.
            d> Find object length.
            `);
        const person = {
            name: 'black',
            age: 22,
            city: 'UK'
        };
        // Solution:
        // using loop to access
        for(let i in person){
            console.log(`Value of ${i} is ${person[i]}.`);
        };
        // add new property called email
        person.email = 'demo@gmai.com';
        delete person.city;
        console.log(`Person obj len is ${Object.keys(person).length}`);   
    }
    console.log(newLine);
    {

        // Question - 02
        console.log(`Question - 02:
        a> Write a function searchProduct and return if find(case-insensitive).
        `);
        // Solution:
        const products= [
            {name: 'iphone'},
            {name: 'Smasung'},
            {name: 'MI'},
            {name: 'Google'},
            {name: 'Iphone'},
        ];
        function searchProduct(products,keyword){
            let filterKey = products.filter(obj=>{
                return obj.name.toLowerCase().includes(keyword.toLowerCase());
            });
            console.log(filterKey);     
        }
        searchProduct(products, 'i');   
    }
    console.log(newLine);
    {
        // Question - 03
        console.log(`Question - 03:
            a> Write a function groupByPost(comments) that returns an object grouping comments by postID.
            `);
        const comments =[
            {id: 1, comment: 'Man'},{id: 1, comment: 'Man'},{id: 1, comment: 'Man'},{id: 1, comment: 'Man'},
            {id: 2, comment: 'Woman'},{id: 2, comment: 'Woman'},{id: 2, comment: 'Woman'},{id: 2, comment: 'Woman'},
            {id: 3, comment: 'Kid'},{id: 3, comment: 'Kid'},{id: 3, comment: 'Kid'},{id: 3, comment: 'Kid'},{id: 3, comment: 'Kid'},
            {id: 4, comment: 'Cloths'},{id: 4, comment: 'Cloths'},{id: 4, comment: 'Cloths'},{id: 4, comment: 'Cloths'},
            {id: 5, comment: 'Electornics'},{id: 5, comment: 'Electornics'},{id: 5, comment: 'Electornics'},{id: 5, comment: 'Electornics'},
            {id: 6, comment: 'Vehicle'},{id: 6, comment: 'Vehicle'},{id: 6, comment: 'Vehicle'},{id: 6, comment: 'Vehicle'},
            {id: 7, comment: 'Toys'},{id: 7, comment: 'Toys'},{id: 7, comment: 'Toys'},{id: 7, comment: 'Toys'},{id: 7, comment: 'Toys'},
        ];
        function groupByPost(comments){
            let groupComments = {};
            comments.forEach(obj=>{
                if(groupComments.hasOwnProperty(obj.id)){
                    groupComments[obj.id].push(obj.comment);
                } else {
                    groupComments[obj.id] = [obj.comment];
                }
            });
            // console.log(groupComments);
            return groupComments;
        }
        let groupComments = groupByPost(comments);
        
        console.log(groupComments);
    }
    console.log(newLine);
    {
        // Question - 04
        console.log(`Question - 04:
                a> Write some function to filter product by category, location, productCode`);
        const categorys = [
            {productCode: "1", category: 'Man', location: 'Dhaka'},
            {productCode: "2", category: 'Woman', location: 'Dhaka'},
            {productCode: "2", category: 'Woman', location: 'Bhagerhat'},
            {productCode: "2", category: 'Woman', location: 'Rongpur'},
            {productCode: "1", category: 'Man', location: 'Rongpur'},
            {productCode: "3", category: 'Kid', location: 'Pabna'},
            {productCode: "3", category: 'Kid', location: 'Borisal'},
            {productCode: "4", category: 'Vehical', location: 'Khulna'}
        ];
        // function for filter by category
        function filterC(categorys,ele){
            let findC = categorys.filter(obj=>{
                return obj.category.toLowerCase().includes(ele.toLowerCase());
            });
            console.log(findC);
            console.log(`Total product found ${findC.length}.`);
            console.log(newLine);
        };
        // function for filter by location
        function filterL(categorys,ele){
            let findC = categorys.filter(obj=>{
                return obj.location.toLowerCase().includes(ele.toLowerCase());
            });
            console.log(findC);
            console.log(`Total product found ${findC.length}.`);
            console.log(newLine);
        };
        // function for filter by productCode
        function filterPC(categorys,ele){
            let findC = categorys.filter(obj=>{
                return obj.productCode.toLowerCase().includes(ele.toLowerCase());
            });
            console.log(findC);
            console.log(`Total product found ${findC.length}.`);
            console.log(newLine);
        };
        // Give me element
        let categoryName = 'man';
        let locationName = 'dhaka';
        let productCode = '3';
        // Call by category
        console.log(`Find by category: `);
        filterC(categorys, categoryName);
        // Call by location
        console.log(`Find by location: `);
        filterL(categorys, locationName);
        // Call by productCode
        console.log(`Find by product-code: `);
        filterPC(categorys, productCode);
    }
    console.log(newLine);
    {
        // Question - 05
        console.log(`Question - 05:
            Create a url.`);
        let params = {
            search: 'apple',
            page: 2,
            sort: 'abc',
            falne: 'ddsefs'
        }

        function createUrl(params){
            let url = '';
            for(key in params){
                url = url + ` ${key}=${params[key]}`;
            }
            let finalURL = url.trim().replaceAll(' ','&');
            console.log(finalURL);
        }
        createUrl(params);
    }
}