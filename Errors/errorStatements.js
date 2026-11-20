let nl = '\n';
// finally
try{
    let x = 2;
    console.log(`${y}`);
} catch (err) {
    console.log(`${err.name}. ${err.message}.`);
} finally {
    console.log(`End this program.`);
}

console.log(nl);
// The throw statement allows you to create a custom error.
let x = 0;
let result = x%2;
try {
    if((result === 0) && (x > 0 || x < 0 )) {
        throw "even.";
    }
    if((result !== 0) && (x > 0 || x < 0)) {
        throw "odd.";
    }
    if(x === 0) {
        throw "zero. Please enter another number.";
    }
    
} catch (err) {
    console.log(`Your number is ${err}`);
} finally {
    console.log(`End this program.`);
}
'use strict';
let y = 5;
{
    let x = y;
    y += x;
    console.log(`x is ${x}`);
}
console.log(`y is ${y}`);
console.log(`y is ${x}`);

const one = 1, two = 2;
{
    console.log(one, "Hi, Can I help you" , two);
}

console.log(nl);
sum(4);

function sum(x=1,y) {
    if(y === undefined) {
        console.log(`Y value is undefined.`);
    } else {
        return x*y;
    }
}

console.log(`${typeof obj == "undefined"}`);
console.log(`${typeof obj !== "undefined"}`);
// An alternative is to use defer="true" in the script tag.
{
    const arr = [1,2,3,4];
    console.log(3 in arr);
}