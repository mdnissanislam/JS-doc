{
    // Create Constructor Function
    function Student(name, age){
        this.name = name;
        this.age = age;
    }

    Student.prototype.intro = function(){
        console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    };

    let s1 = new Student("Black", 33);
    s1.intro();
    
}

{
    // Create a bank system
    function BankAccount(holderName, balance = 0){
        this.holderName = holderName;
        this.balance = balance;
    }
    // Prototype
    BankAccount.prototype.deposit = function(balance){
        this.balance += balance;
    }
    // Prototype
    BankAccount.prototype.withdraw = function(balance){
        this.balance -= balance;
    }

    let account1 = new BankAccount("Ali Hossain", 50);
    let account2 = new BankAccount("Khalid Hossain", 50);

    account1.deposit(50);
    account1.deposit(50);
    account1.withdraw(50);
    account2.deposit(500);

    console.log(`
        Your name is ${account1.holderName}.
        Your balance is ${account1.balance} taka.
        `);
    console.log(`
        Your name is ${account2.holderName}.
        Your balance is ${account2.balance} taka.
        `);
}