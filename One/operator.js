{
    // Assignment operator
    // The ... operator
    // The "spread" operator spreads elements of iterable objects:

    const name1 = ["Ali", "Hani", "Alih"];
    const name2 = ["Ali2", "Hani2", ..."Alih2"];
    let newList = [name1,...name2];
    console.log(newList);
    console.log(`Now length is ${newList.length}`); // 8
    newList = [...name1,...name2];
    console.log(newList);
    console.log(`Now length is ${newList.length}`); // 10
}

{
    // Logical operator
    // Relational Operator
    const person = {
        name: "Black Hole",
        age: 22,
        email: "demo@gmail.com",
        country: "Bangladesh"
    };
    // in   -   Property in Object
    let isTrue = "name" in person;
    console.log(`Person obj have a name property ${isTrue}`);

    const arr = ["name", "age", "city"];
    const number = 22;
    console.log(typeof number);
    const str = "String";
    const boolean = true;
    // instanceof   -   Instance of Object
    console.log(`Person is Object: ${person instanceof Object}`);
    console.log(`arr is Object: ${arr instanceof Object}`);
    console.log(`number is Object: ${number instanceof Number}`);
    console.log(`str is Object: ${str instanceof Object}`);
    console.log(`boolean is Object: ${boolean instanceof Object}`);
}

{
    // Logical Operator
    // ?? Nullish Coalescing
    // a = b ?? c
    // if b = null or undefined a = c else a = b
    console.log(`Logical operator:\n\tNullish ??:`);
    let txt1 = "Human";
    let txt2; // or null
    let robo = "Robot";
    let result1 = txt1 ?? robo;
    let result2 = txt2 ?? robo;
    console.log(`Hi I am ${result1}.`);
    console.log(`Hi I am ${result2}.`);
}
