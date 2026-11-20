let nl = '\n';
{
    // Spread operator
    // Shallow copy
    console.log('Shallow Copy: ');
    let arr = [1,2,3,4];
    let arr2 = [...arr];
    let arr3 = [...arr2,...arr];
    console.log(arr2);
    console.log(arr3);

    // String to array
    console.log(nl);
    console.log('String to array');
    let str = 'black hole';
    let arr4 = [...str];
    console.log(arr4);

    // function
    console.log(nl);
    console.log('Spread using in function: ');
    let user = ['Ali Khan', 'Ajad Khan', 'Abdul Khan'];
    function name(firstName, secondName, thirdName){
        console.log(firstName);
        console.log(secondName);
        console.log(thirdName);
    };
    name(...user);

    // obj
    console.log(nl);
    console.log('Obj marge: ');
    let obj1 = {
        name1: 'Black',
        age1: 'Hole'
    };
    let obj2 = {
        name2: 'White',
        age2: 'Belt'
    };
    let obj = {
        ...obj1,
        ...obj2
    };
    console.log(obj);
}
console.log(nl);
{
    // Rest operator
    console.log('Rest Operator: ');
    console.log('Rest in function parameter: ');
    function sum(...arr){
        let sum = arr.reduce((acc, pre)=>{
            return acc + pre;
        });
        return sum;
    };
    let result = sum(1,2,3,4,5);
    console.log('Sum is ',result);

    // Rest with destructuring array
    console.log(nl)
    console.log('Rest with destructuring array: ');
    let arr = ['Black', 'White', 'Blue', 'Red', 'Green'];
    let [firstColor, secondColor, ...otherColor] = arr;
    console.log(`${firstColor}, ${secondColor}, ${otherColor}`);

    // Rest with destructuring obj
    console.log(nl);
    console.log('Rest with destructuring obj: ');
    let person = {name: 'Black Hole', age: 2222, email: 'demo@gmail.com'};
    let { name, ...other } = person;
    console.log(name);
    console.log(other);
}