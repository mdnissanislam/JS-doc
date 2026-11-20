let nl = '\n';
{    
    // Abstraction
    // Use abstraction to make the system easy to use.
    class Car{
        #fuel = 100; // private

        // Method
        #burn(){
            this.#fuel -= 1;
        }

        start(){
            this.#burn();
            console.log(`Start your car.`);
            console.log(`Now fuel: ${this.#fuel}`);
        }
        
    }

    let faisul = new Car();
    faisul.start();
    faisul.start();
}
console.log(`${nl}`);
{
    // Encapsulation
    // Use encapsulation to make the system safe and secure
    class BankAccount{

        #balance = 0; // Private

        // deposite(balance){
        //     this.#balance += balance;
        // }
        
        // withdraw(balance){
        //     this.#balance -= balance;
        // }

        // OR

        #setBalance(balance) {
            if(typeof balance === 'string'){
                console.error(`Sorrry wrong input.`);
                return;
            }
            this.#balance += balance;
        }

        #getBalance() {
            return this.#balance;
        }

        // OR

        get Balance() {
            return this.#getBalance();
        }

        set Balance(balance) {
            this.#setBalance(balance);
        }
        
    }

    let anas = new BankAccount();

    anas.Balance = '3';
    console.log(`${anas.Balance}`);
}
{
    // Inheritance
    class Car{
        constructor(name, color){
            this.name = name;
            color;
        };
        start(){
            console.log(`Start your ${this.name} car.`);
        }
        stop(){
            console.log(`Stop your ${this.name} car.`);
        }
    }

    class Electric_Car extends Car{
        charging(){
            console.log(`Charging your ${this.name}`);
        }
    }

    // Create obj
    let faisul = new Electric_Car('Faisul', "Black");
    faisul.start();   
}
console.log(`${nl}`)
{
    /*
        Why use Singleton?
            App settings
            Database Connections
            Authentication state
            Logger services
    */
    // Singleton with Class
    class Logger {
        constructor(name){
            if(Logger.instance) {
                return Logger.instance;
            }
            this.name = name;
            Logger.instance = this;
        }
        log(greetType) {
            console.log(`${greetType}, ${this.name}`);
        }
    }
    const logger1 = new Logger('Black');
    const logger2 = new Logger('Hole');

    logger1.log('Hi');

    console.log(logger1 === logger2);
}