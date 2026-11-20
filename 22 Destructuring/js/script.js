let nl = '\n';
{
    // Default values
    console.log(`Default values: `);
    const [x=1, y=2] = [5];
    console.log(`${x}, ${y}`);
}
console.log(nl);
{
    // Skip array items
    console.log('Skip array items: ');
    const [one, , three] = [1,2,3,4];
    console.log(`${one}, ${three}`);
}
console.log(nl);
{
    // Swapping values
    console.log(`Swapping values: `);
    let a = 5, b = 10;
    console.log(`Before swapping a is ${a} and b is ${b}`);
    [a,b] = [b,a];
    console.log(`After swapping a is ${a} and b is ${b}`);
}
console.log(nl);
{
    // Nested destructuring in array
    console.log(`Nested destructuring: `);
    console.log(`Nested destructuring array: `);
    let [a,,,,[x,y]] = [1,2,3,4,[5,6]];
    console.log(`${x} ${y}`);

    // Nested destructuring in obj
    console.log(`Nested destructuring obj: `);
    let obj = {
        name: 'Black Hole',
        age: 22,
        address: {
            postcode: 212121,
            arr: [1,3,4,2]
        }
    };

    let {name: userName,address:fullAddress}= obj;
    console.log(fullAddress);
}
console.log(nl);
{
    // Default value in obj
    let {name, age=22} = {
        name: 'Ali', 
    }
    console.log(`${name} ${age}`);
    console.log(nl);

    // Rename keys
    console.log(`Rename keys: `);
    let obj = {
        name: 'Abdul',
        age: 33
    };
    let {name:userName, age:userAge} = obj;
    console.log(`Name: ${userName}\nAge: ${userAge}`);

    let {myName:fullName} = {
        myName: 'Ajad Kumar'
    };
    console.log(`${fullName}`);
}
console.log(nl);
{
    // Array in parameters
    console.log(`Array in parameters: `);
    function sum([a,b]){
        return a+b;
    };
    let a = [3,3,3,3];
    console.log(sum(a)); // a or [1,3]

    // Objects in parameters
    console.log(`Objects in parameters: `);
    function greet({name, age}){
        console.log(`Hello ${name}, you are ${age} years old.`);
    };
    let obj = {
        name: 'Black Hole',
        age: 2
    }
    greet(obj);
    
}
console.log(nl);
{
    // Problems:
    {
        /* 01. Create a function return odd and even number using
            destructure.
        */
        function seperateEO(...arr){
            let odd = arr.filter(e=>{
                return e % 2 !== 0;
            });
            let even = arr.filter(e=>{
                return e % 2 === 0;
            });
            return {
                odd,
                even
            };
        };

        let arr = [1,2,3,4,5,6,7,8,9,10];
        let {odd, even} = seperateEO(...arr);
        console.log(`Odd is ${odd}\nEven is ${even}`);
    }
    console.log(nl);
    {
        /* 02. Create a function for Bank system where update
               balance and see.
        */
        function Bank(money){
            
            let newBalance = money;

            function setMoney(money){
                newBalance += money;
            };
            
            function getMoney(){
                return newBalance;
            };

            return [getMoney, setMoney];
        };

        let [seeBalance, updateBalance] = Bank(0);

        // Update balance
        console.log(`New balance is ${seeBalance()} tk.`);
        console.log(`Add 100 tk.`);
        updateBalance(100);
        console.log(`New balance is ${seeBalance()} tk.`);
        // Update balance
        console.log(`Payment 10 tk.`);
        updateBalance(-10);
        console.log(`New balance is ${seeBalance()} tk.`);

    }
}