{
    let firstName = "Black";
    let country = "UK";
    // Template interpolation
    let txt = `I am ${firstName}.`
    // Here one placeholder (firstName)
    let txt1 = `I am ${firstName}. I am from ${country}.`
    // Here two placeholder (firstName, country)
}
console.log(`\n`);
{
    {
        // String
        let text = "It's alright";
        // find lenght
        console.log(`text length is ${text.length}`);
    }
    console.log(`\n`);
}
console.log(`\n`);
{
    {
        // String Methods
        // JavaScript String Methods
        let firstName = `Black`;
        let lastName = `Hole`;
        let fullName = firstName + ` ` + lastName;
        console.log(fullName);

        // Extracting String Characters
        console.log(`Find 2nd Charecter from Full name: `+fullName.at(1)); // l
        console.log(`Find 2nd Charecter from Full name: `+fullName.charAt(1)); // l
        console.log(`Find 2nd Charecter and return utf-16 code from Full name: `+fullName.charCodeAt(1)); // 108
        console.log(`Property access from fullName: `+fullName[0]);// B

        // Extracting String Parts
        // slice(start, end(n))
        console.log(`Extracts a part from fullName: `+fullName.slice(6,10));// Hole

        // slice(start to n)
        console.log(`Extracts a part from fullName: `+fullName.slice(6));// Hole

        console.log(`Using negative value: `);

        console.log(`Extracts a part(-4) from fullName: `+fullName.slice(-4));// Hole -4 to n

        console.log(`Extracts a part from fullName: `+fullName.slice(-4, 10));// Hole

        // Substring() is similar to slice()
        console.log(`Extracts a part from fullName: `+fullName.substring(6,10));//Hole
        
        // Converting to Upper and Lower Case:
        console.log(`Full Name: ` + fullName);
        console.log(`Full Name Upper Case: ` + fullName.toUpperCase());
        console.log(`Full Name Upper Case: ` + fullName.toLocaleUpperCase());
        console.log(`Full Name Lower Case: ` + fullName.toLocaleLowerCase());
        console.log(`Full Name Lower Case: ` + fullName.toLowerCase());

        let newFirstName = fullName.slice(0,5);
        let newLastName = fullName.slice(6,10); // slice(6);
        console.log(`First name: ${newFirstName}`);
        console.log(`Last name: ${newLastName}`);

        // concat() joins two or more strings
        let one = "one "; 
        let two = "one ";
        let three = "one ";
        let four = "one ";
        let five = "one";
        let text = "".concat(one,two,three,four,five); // one one one one one
        console.log(text);
    }
    console.log(`\n`);
    {
        // padStart(number, string);
        console.log(`padStart(3, "0")`);
        let num = 5;
        let text = num.toString();
        console.log(text.padStart(3,"0"));
        // padEnd(number, string);
        console.log(`padEnd(3, "0")`);
        console.log(text.padEnd(3,"0"));
    }
    console.log(`\n`);
    {
        // string.trim();
        // The trim() method removes whitespace from both sides of a string
        let text = "   hello   ";
        console.log(text)
        console.log(`trim():`);
        console.log("+"+text.trim()+"+");

        // string.trimStart();
        console.log(`trimStart():`);
        console.log(text.trimStart()+"+");

        // string.trimEnd();
        console.log(`trimEnd():`);
        console.log(text.trimEnd()+"+");
    }
    console.log(`\n`);
    {
        // string.repeat(count);
        console.log(`repeat():`);
        let text = "1 ";
        console.log(text.repeat(3));
    }
    console.log(`\n`);
    {
        // string.replace(match string, replace string);
        // By default, the replace() method replaces only the first match
        let text = `Please visit Bangladesh, Bangladesh bangladesh and India.`;
        console.log(`replace():`);
        console.log(text.replace(`Bangladesh`,`UK`));

        // To replace all matches, use a regular expression with a /g flag (global match):
        console.log(text.replace(/Bangladesh/g,`UK`));
        
        // To replace case insensitive, use a regular expression with an /i flag (insensitive):
        console.log(text.replace(/Bangladesh/gi,`UK`));
    }
    console.log(`\n`);
    {
        // string.replaceAll(string, string);
        console.log(`replaceAll():`);
        let text = `I am form Bangladesh. Bangladesh is my home town. bangladesh cats are very popular.`
        let text2 = `I am form bangladesh. Bangladesh is my home town. bangladesh cats are very popular.`
        console.log(text.replaceAll(`Bangladesh`, `UK`));
        console.log(text2.replaceAll(`bangladesh`, `uk`));
        // To replace all matches, use a regular expression with a /g flag (global match):
        console.log(text.replaceAll(/Bangladesh/g, `UK`));
        // To replace case insensitive, use a regular expression with an /i flag (insensitive):
        console.log(text.replaceAll(/Bangladesh/gi, `UK`));
    }
    console.log(`\n`);
    {
        // string.split();
        console.log(`split():`);
        let text = "hello";
        console.log(text.split());

    }
    console.log(`\n`);
}

// ---------------------------
{    
    // String Search
    console.log(`String Search:`);
    console.log(`\n`);
    {
        // indexOf()
        // The indexOf() method returns the index (position) of the first   occurrence(ltr) of a string in a string, or it returns -1 if the string is not found:
        let text = "Please help me.";
        let index = text.indexOf("me");
        console.log(`Please help me.`); // 12
        console.log(`me position is: ${index}. Here using indexOf() method.`);
        // indexOf("string", search starting position)
        console.log(`me search start from 4 position. indexOf("he", 4): ${text.indexOf("me", 4)}`); // 12
    }
    console.log(`\n`);
    {
        // lastIndexOf()
        // The lastIndexOf() method returns the index of the last occurrence(ltr) of a specified text in a string:
        let text = `Please help me. Please help me.`;
        let index = text.lastIndexOf("me"); // 28
        console.log(`Please help me. Please help me.`);
        console.log(`me position is: ${index}. Here using lastIndexOf() method.`);
        // lastIndexOf("string", search ending position)
        console.log(`me search start from 1 position. lastIndexOf("me", 28): ${text.lastIndexOf("me", 28)}`); // 28
        console.log(`me search start from 1 position. lastIndexOf("me", 12): ${text.lastIndexOf("me", 22)}`); // 12

        // Note: here 1 = 0 (index)
    }
    console.log(`\n`);
    {
        // string.search(string)
        // The search() method searches a string for a string (or a regular expression) and returns the position of the match:
        let text = `Please help me.`;
        console.log(text);
        console.log(`search(\`me\`): ${text.search(`me`)}`); // 12
        console.log(`Regular Expression: search(\/me\/): ${text.search(/me/)}`); // 12
    }
    console.log(`\n`);
    {
        // string.match(string)
        // The match() method returns an array containing the results of matching a string against a string (or a regular expression).
        let text = `Give me a pen. Give Me a PEN. give me A Pen.`;
        console.log(text);
        let myArr = text.match(`me`);
        console.log(`match(\`me\`): ${myArr}`);
        console.log(`Regular Expression: match(\/me\/): ${text.match(/me/)}`);
        // Global search for me using: g
        console.log(`Regular Expression global(g) search : match(\/me\/g): ${text.match(/me/g)}`);
        // Global(g), Case-insensitive(i) search for pen using: gi
        console.log(`Regular Expression global(g), case-insensitive(i) search: match(\/pen\/gi): ${text.match(/pen/gi)}`);

        // Note: If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.
    }
    console.log(`\n`);
    {
        // string.matchAll(string);
        // The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
        console.log(`matchAll():`);
        let text = "I love cats. Cats are very easy to love. Cats are very popular."
        const myArr = text.matchAll(`Cats`);
        console.log(`Array.from():`)
        console.log(`Find all Cats: ${Array.from(myArr)}`);
        
        // If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
        console.log(`Find all Cats: ${Array.from(/myArr/g)}`);
        
        // If you want to search case insensitive, the insensitive flag (i) must be set:
        console.log(`Find all Cats: ${Array.from(/myArr/gi)}`);

        // Note: matchAll() does not work in Internet Explorer.
    }
    console.log(`\n`);
    {
        // string.includes()
        // The includes() method returns true if a string contains a specified value.Otherwise it returns false.
        console.log(`includes():`);
        let text = "Hello world, welcome to the universe.";
        console.log(text.includes(`world`)); // true
        console.log(text.includes(`world`, 6)); // true
        console.log(text.includes(`world`, 7)); // false
    }
    console.log(`\n`);
    {
        // string.startsWith();
        // The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
        console.log(`startsWith():`);
        let text = "Hello world, welcome to the universe.";
        console.log(text.startsWith(`Hello`)); // true
        console.log(text.startsWith(`hello`)); // false
        // string.startsWith("string", search start position);
        console.log(text.startsWith(`world`, 5)); // false
        console.log(text.startsWith(`world`, 6)); // true
        // startsWith() is not supported in Internet Explorer.
    }
    console.log(`\n`);
    {
        // string.endsWith(string);
        // The endsWith() method returns true if a string ends with a specified value.Otherwise it returns false:
        console.log(`endsWith()`);
        let text = "Hello world, welcome to the universe.";
        console.log(text.endsWith(`verse.`)); // true
        console.log(text.endsWith(`the`)); // false
        // string.endsWith(string, search end point);
        console.log(text.endsWith(`world`, 10)); // false
        console.log(text.endsWith(`world`, 11)); // true
    }
    console.log(`\n`);
}

// ---------------------------
{
    // string reference
    {
        // String.fromCharCode(number);
        console.log(`String.fromCharCode(72, 105): `);
        let text = String.fromCharCode(72, 105);
        console.log(text);
    }
    console.log(`\n`);
    {
        // toWellFormed();
        let text = `Hello world \uD800`;
        console.log(`toWellFormed(): `);
        console.log(text.toWellFormed());

        console.log(`\n`);
        // isWellFormed();
        console.log(`isWellFormed(): `);
        console.log(text.isWellFormed());
    }
    console.log(`\n`);
    {
        // string.valueOf();
        console.log(`valueOf(): `);
        let text = "It's similar to result = text;";
        let result = text.valueOf();
        console.log(result);
    }
    console.log(`\n`);
}
// ---------------------------
{
    //String Templates
    {
        // Automatic replacing of variables with real values is called string interpolation.
        let firstName = "Ali";
        let lastName = "Hossain";
        console.log(`Welcome ${firstName} ${lastName}.`);

        // Automatic replacing of expressions with real values is called string interpolation.
        let price = 10;
        let vat = .25;
        console.log(`Total price is: ${(price * (1+vat)).toFixed(2)}`);

        // HTML Templates
        let header = `Template Strings`;
        let tags = [`html`,`css`,`js`];
        let html = `<h2>${header}</h2><ul>`;
        for(const x of tags){
            html += `<li>${x}</li>`;
        }
        html += `</ul>`;
        document.getElementById(`htmltemplates`).innerHTML = html;
    }
}   
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------