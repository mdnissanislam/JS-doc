{   /*
        Simplest and most common way to create an obj.
        Used when creating a single, specific obj.
    */
    let Student = {
        myName: 'Ali',
        age: 33,
        passion: 'Football',
        introduceMySelf: intro
    };

    Student.introduceMySelf();

    function intro(){
        console.log(`My name is ${this.myName}. I am ${this.age}. My passion is ${this.passion}.`);
    }

    function s1(){
        return {
            myName: 'Black',
        age: 22,
        passion: 'Cooking',
        introduceMySelf: intro
        }
    }

    let result = s1();
    console.log(result.introduceMySelf());
}
{
    /*
        Factory function:
        A function that returns a new object.
        Great for creating multiple similar objects wihtout classes.
    */
    function intro(){
        console.log(`My name is ${this.myName}. I am ${this.age}. My passion is ${this.passion}.`);
    }

    function s1(myName,age,passion){
        return {
        myName,
        age,
        passion,
        introduceMySelf: intro
        }
    }

    let result = s1('Khan',12,'Fiaring');
    let result2 = s1('Bhole',32,'Fighting');
    console.log(result.introduceMySelf());
}

{
    /*
        Constructor Function:
            Uses the new key word.
            Before class syntax was introduced in es6,
            this was the standard way to create "obj blueprints."
    */

    function Student(myName, age, passion){
        this.myName = myName,
        this.age = age,
        this.passion = passion
    }

    let s1 = new Student("Black Hole", 22, "Cooking");
    let s2 = new Student("Ali Khan", 22, "Cooking");
    console.log(s1);
    console.log(s2);
}

{
    /*
        Class syntax:
        Using this syntax
    */
    class Student {
        constructor(name,age,passion){
            this.name = name;
            this.age = age;
            this.passion = passion;
        }
        // method
        myF(){
            console.log(`${this.name} ${this.age} ${this.passion}`);
        }
    }
    let s1 = new Student("Ali", 22, "Football");
    s1.myF();
    console.log(s1);
}
