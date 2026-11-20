let newLine = "\n";

{
    let text = "Welcome to RegExp";
    // (?<=y)x matches "x" if "x" is preceded by "y".
    let pattern_01 = /(?<=Welcome )to/;
    // (?<!y)x matches "x" only if "x" is NOT preceded by "y".
    let pattern_02 = /(?<!Welcome )to/;
    let result_01 = pattern_01.test(text);
    let result_02 = pattern_02.test(text);
    console.log(`/(?<=Welcome )/ is ${result_01}`);
    console.log(`/(?<!Welcome )/ is ${result_02}`);
}
console.log(newLine);
{
    let text = "Hi I am Black.";
    // Using String match()
    let result = text.match(/Black/);
    console.log(result);
    console.log(result[0]);
}
console.log(newLine);
{
    let text = "How are you? Are you Dane.";
    console.log(text);
    // Using String replace()
    let result_1 = text.replace(/How/, "Who");
    console.log(result_1);
    let result_2 = text.replace(/how/i, "Who");
    console.log(result_2);
}
console.log(newLine);
{
    // RexExp Alteration (OR)
    let text = "Red | Green | Blue | Yellow | Orange";
    console.log(text);
    let result = text.match(/red|green/ig);
    // /g Performs a global match (find all)
    // /i Performs case-insensitive matching
    console.log(result);
}
console.log(newLine);
{
    // \d   Matches Digits
    // \w	Matches Words
    // \s	Matches Spaces
    let text = "Give me 10 dollar. Sorry I don't have money. Give me your @gmail.com";
    console.log(text);
    // let p1 = /\d/g;
    // A global search for non-digit characters:
    let p1 = /\D/g;
    let r1 = text.match(p1);
    console.log(r1);
    // let p2 = /\w/g;
    let p2 = /\W/g;
    let r2 = text.match(p2);
    console.log(r2);
    // let p3 = /\s/;
    let p3 = /\S/g;
    let r3 = text.match(p3);
    console.log(r3);
}
console.log(newLine);
{
    text = "Hello, I am Ali.";
    console.log(text);
}
console.log(newLine);
{
    const text = "Name: John Doe";

    // Using named capturing groups
    const regex = /(?<firstName>\w+) (?<lastName>\w+)/;
    const match = text.match(regex);

    let fName = match.groups.firstName;
    let lName = match.groups.lastName;
    console.log(fName);
    console.log(lName);
}
console.log(newLine);
{
    let user = {
        "FullName": "Ali Khan",
        "age": 22
    }

    for(let [x,y] of Object.entries(user)){
        console.log(`${x}: ${y}`);
    }
}
console.log(newLine);
{
    let arr = new Array(5);
    arr.fill(2);
    console.log(arr);
    const arr2 = [1,2,3,4];
    console.log(arr2.BYTES_PAR_ELEMENT);
    let a = arr2.find((x)=>x>2);
    console.log(a);
}
console.log(newLine);
{
    let a = [];
    function rand(min,max) {
        return Math.floor(Math.random()*(max-min+1)) + min;
    }
    for(let i=0; i<10; i++){
        a.push(rand(2,11));
    }
    console.log(`Min value in array ${Math.min(...a)}`);
    console.log(`Max value in array ${Math.max(...a)}`);
}