let nl = '\n';
// Create a class
{
    class Car {
        constructor(name) {
            this.name = name;
        }
        display () {
            return 'My car name is ' + this.name;
        }
    }
    // To create a class inheritance, use the extends keyword.
    class BMW extends Car {
        constructor(name){
            // The super() method refers to the parent class
            super(name);
        }
    }
    const bmw = new BMW('BMW');
    console.log(`Hi`);
    console.log(`${bmw.name}`);
}
// Static class methods are defined on the class itself.
{
        class Car {
        constructor(name) {
            this.name = name;
        }
        static display (obj) {
            return 'My car name is ' + obj.name;
        }
    }
    const volvo = new Car('Volvo');
    console.log(`${Car.display(volvo)}`);
}
// Closure
{
    function one(one){
        let newOne = one;
        return function two(two){
            console.log(newOne+two);
        }
    }

    let three = one(1);
    three(1);
    three(1);
}
