let nl = '\n';
let x = 5;

try {
    console.log(`X value is ${x}`);
    console.log(`Y value is ${y}`);
} catch (err) {
    console.log(`${err.name}\n${err.message}`);
}
console.log(nl);
try {
    let x = y+5;
} catch (err) {
    console.log(`${err.name}\n${err.message}`);
}
console.log(nl);
try {
    x.toUpperCase;
} catch (err) {
    console.log(`${err.name}\n${err.message}`);
}
// A RangeError occurs when a value is out of its valid range.
console.log(nl);
try {
    new Array(-1);
} catch (err) {
    console.log(`${err.name}\n${err.message}`);
}
try {
    let n = 5;
    n.toPrecision(101);
} catch (err) {
    console.log(`${err.name}\n${err.message}`);
}