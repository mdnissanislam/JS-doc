let nl = "\n";
{
    // sort()
    let number = [1,3,2,10,4,5,6,9,7,8];
    console.log();
}
console.log(nl);
{
// copyWithin(0, 0)
// copyWithin(0, 0, 0)
// copyWithin(target, start, end)
    let string = "copyWithin(2, 0, 4): ";
    let fruits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(`${fruits}
    ${string} ${fruits.copyWithin(2, 0, 4)}`);
    // copyWithin(target,);
    
    let number = [1,2,3,[4,3,2,[3,2,1,[8,9,2,3]]]];

    console.log(`\nNumber: ${number.flat()}`);
}