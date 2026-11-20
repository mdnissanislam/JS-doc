{
    {  
        // The simplest way to print a fractional number is by using console.log:
        let num = 3.14159;
        console.log(`Number is ${num}`);
        console.log(`Normal output is ${num}`); // Outputs: 3.14159

        // Using toFixed(n): Limits the number of decimal places to n.
        let num2 = 3.14159;
        console.log(`Output toFixed(2) function ${num.toFixed(2)}`); // Outputs: 3.14 (as a string)

        // Using toPrecision(n): Formats the number to n significant digits.
        // Very Small or Large Numbers: Use exponential notation or toPrecision for clarity.
        let smallNum = 0.000000123;
        console.log(`Normal number is ${smallNum}`);
        console.log(`Show exponential notation ${smallNum.toPrecision(3)}`); // Outputs: 1.23e-7

        // Note: toFixed and toPrecision return strings, so convert back to a number with parseFloat
        let formatted = parseFloat(num.toFixed(2)); // Returns 3.14 (as a number)
        let formatted2 = parseInt(num.toFixed(2)); // Returns 3 (as a number)
        console.log(`Formatted type is ${typeof formatted}`);
        console.log(`Formatted number is ${formatted}`);
        console.log(`Formatted2 type is ${typeof formatted2}`);
        console.log(`Formatted2 number is ${formatted2}`);

        // Using toLocaleString: Formats the number based on locale, with optional decimal precision.
        let num3 = 3.14159;
        console.log(`Using toLocaleString:`);
        console.log(num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })); // Outputs: 3.14
    }
    console.log(`\n`);
    {
        // Type casting
        let number1 = 10;
        let number2 = "10";
        let number3 = 10.33;
        let result = number1 + number2; // string
        console.log(typeof result);
        let result1 = +number2;
        console.log(typeof result1); // number
        let result2 = number2 + number1;
        console.log(typeof result2); // string
        let x = 10;
        let y = 20;
        let result3 = x + y + number2; // 3010
        let result4 = number2 + x + y; // 101020
        console.log(result3 + ` ` + typeof result3); // string
        console.log(result4 + ` ` + typeof result4); // string
    }
    console.log(`\n`);
    {
        // NaN
        console.log(`NaN typeof is ${typeof NaN}`); // number

        // Infinity
        console.log(`Infinity typeof is ${typeof Infinity}`); // number
    }
    console.log(`\n`);
    {
        // By default, JavaScript displays numbers as base 10 decimals.

        // But you can use the toString() method to output numbers from base 2 to base 36.

        // Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
        // myNumber.toString(base);
        console.log(`number.toString(base): `);
        let myNumber = 36;
        console.log(`Hexatrigesimal (base 36) myNumber.toString(36): ${myNumber.toString(36)}`);
        console.log(`Duotrigesimal (base 32) myNumber.toString(32): ${myNumber.toString(32)}`);
        console.log(`Hexadecimal (base 16) myNumber.toString(16): ${myNumber.toString(16)}`);
        console.log(`Duodecimal (base 12) myNumber.toString(12): ${myNumber.toString(12)}`);
        console.log(`Decimal (base 10) myNumber.toString(10): ${myNumber.toString(10)}`);
        console.log(`Octal (base 8) myNumber.toString(8): ${myNumber.toString(8)}`);
        console.log(`Binary (base 2) myNumber.toString(2): ${myNumber.toString(2)}`);
        // Without base
        console.log(`Without base: `);
        console.log(myNumber.toString());
    }
    console.log(`\n`);
    {
        // Numbers as Objects
        console.log(`Numbers as Objects: `);
        let x = 10; // number
        let y = new Number(10); // object
        console.log(`x == y: ${x==y}`);
        console.log(`x === y: ${x===y}`);

        // Do not create Number objects.
        // The new keyword complicates the code and slows down execution speed.
    }
    console.log(`\n`);
    {
        // BigInt
        console.log(`BigInt: `);
        console.log(`Number.isInteger(12): ${Number.isInteger(12)}`);
        console.log(`Number.isInteger(12.02): ${Number.isInteger(12.02)}`);
        console.log(`Number.isSafeInteger(12): ${Number.isSafeInteger(12)}`);
        console.log(`Number.isSafeInteger(12000000000000000): ${Number.isSafeInteger(12000000000000000)}`);
        console.log(``);
    }
    console.log(`\n`);
    {
        // Number Methods
        console.log(`Number Methods: `);
        // The toString() method returns a number as a string.
        console.log(`(10).toString(): ${(10).toString()}`);
        // toExponential() returns a string, with a number rounded and written using exponential notation.
        console.log(`(10.001).toExponential(): ${(10.001).toExponential()}`);
        // toFixed() returns a string, with the number written with a specified number of decimals:
        console.log(`(10.035).toFixed(2): ${(10.035).toFixed(2)}`);
        // toPrecision() returns a string, with a number written with a specified length:
        console.log(`(10.035).toPrecision(2): ${(10.035).toPrecision(2)}`);
        console.log(`(10.012).valueOf(): ${(10.012).valueOf()}`);
    }
    console.log(`\n`);
    {
        // Number();
        console.log(`Number():
        Number(true): ${Number(true)}
        Number(false): ${Number(false)}
        Number("10"): ${Number("10")}
        Number("  10"): ${Number(" 10")}
        Number("10  "): ${Number("10 ")}
        Number(" 10  "): ${Number(" 10 ")}
        Number("10.33"): ${Number("10.33")}
        Number("10,33"): ${Number("10,33")}
        Number("10 33"): ${Number("10 33")}
        Number("John"): ${Number("John")}
        `);
    }
    console.log(`\n`);
    {
        // parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
        console.log(`parseInt():
        parseInt("-10"): ${parseInt("-10")}
        parseInt("-10.33"): ${parseInt("-10.33")}
        parseInt("10"): ${parseInt("10")}
        parseInt("10.33"): ${parseInt("10.33")}
        parseInt("10 20 30"): ${parseInt("10 20 30")}
        parseInt("10 years"): ${parseInt("10 years")}
        parseInt("years 10"): ${parseInt("years 10")}
        `);
    }
    console.log(`\n`);
    {
        // parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
        console.log(`parseFloat():
        parseFloat("-10"): ${parseFloat("-10")}
        parseFloat("-10.33"): ${parseFloat("-10.33")}
        parseFloat("10"): ${parseFloat("10")}
        parseFloat("10.33"): ${parseFloat("10.33")}
        parseFloat("10 20 30"): ${parseFloat("10 20 30")}
        parseFloat("10 years"): ${parseFloat("10 years")}
        parseFloat("years 10"): ${parseFloat("years 10")}
        `);
    }
    console.log(`\n`);
    {
        // Number Properties
        console.log(`Number Properties:
        Number.EPSILON: ${Number.EPSILON}
        Number.MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER}
        Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}
        Number.MIN_VALUE: ${Number.MIN_VALUE}
        Number.MAX_VALUE: ${Number.MAX_VALUE}
        Number.POSITIVE_INFINITY: ${Number.POSITIVE_INFINITY}
        Number.NEGATIVE_INFINITY: ${Number.NEGATIVE_INFINITY}
        1000.toLocaleString(): ${(1000).toLocaleString("bn-BD", {style:"currency", currency: "BDT"})}
        `);

        // prototype
        console.log(`prototype: `);
        Number.prototype.divided = function(value) {
            return this.valueOf() / value;
        }
        console.log(`(4).divided(2): ${(4).divided(2)}`);
    }
    console.log(`\n`);
}