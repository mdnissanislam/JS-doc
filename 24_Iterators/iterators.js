const nl = '\n';
{
    console.log(`This iterable returns never ending number: 10,20,30,40,.... when the next() method is called:`);
    function number() {
        let n = 0;
        return {
            next: function() {
                n += 10;
                return {value:n, done:false};
            }
        };
    }

    const n = number(); // next()
    console.log(`${n.next().value}`); // 10
    console.log(`${n.next().value}`); // 20
    console.log(`${n.next().value}`); // 30
    console.log(`${n.next().value}`); // 40
}
console.log(nl);
// A JavaScript iterable is an object that has a Symbol.iterator.

// The Symbol.iterator is a function that returns a next() function.
{
    console.log(`Symbol.iterator using in object.`)
    const number = {};
    number[Symbol.iterator] = function() {
        let n = 0;
        done = false;
        return {
            next() {
                n += 10;
                if(n==40) {done = true}
                return {value:n, done:done};
            }
        };
    }

    for (const x of number) {
        console.log(`${x}`);
    }

    console.log(`Symbol.iterator using in object and create an new object.`)
    // Create an Object
    const myNum = {};

    // Make it Iterable
    myNum[Symbol.iterator] = function () {
        let n = 0;
        done = false;
        return {
            next () {
                n += 10;
                if (n == 40) {done = true};
                return {value: n, done: done};
            }
        };
    }

    // Create an iterator
    let iterator = myNum[Symbol.iterator]();

    while(true) {
        const result = iterator.next();
        if(result.done) break;
        console.log(result.value);
    }   
}
{
    console.log(`take() method:`);
    {
        // Create an iterator
        const number = Iterator.from([1,2,3,4,5,6]);
        
        // Take the first five elements
        const fiveNum = number.take(5);
        for(const x of fiveNum) {
            console.log(`${x}`);
        }
    }
    console.log(`drop() method:`);
    {
        // Create an iterator
        const number = Iterator.from([1,2,3,4,5,6]);
        
        // Remove the first five elements
        const fiveNum = number.drop(5);
        for(const x of fiveNum) {
            console.log(`${x}`);
        }
    }
}
// A JavaScript Function can only return one value.

// A JavaScript Generator can return multiple values, one by one.

// A JavaScript Generator can yield a stream of data.

// A JavaScript Generator can be paused and resumed.
{
    console.log(`Generators:`);
    // Syntax
    // function* myFunc() {}
    // returns a Generator Object, not a direct value
    // {value:1, done:false}

    function* myNumbers () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
    const num = myNumbers();
    for(const x of num) {
        console.log(x);
    }
}