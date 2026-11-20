// Create a increment decrement system
{
    const obj = {
        counter: 0
    }

    Object.defineProperty(obj, "reset", {
        get: function() {this.counter = 0;}
    });

    Object.defineProperty(obj, "increment", {
        get: function() {this.counter++;}
    });
    Object.defineProperty(obj, "decrement", {
        get: function() {this.counter--;}
    });

    // set : ()=>{this.property = value}
    Object.defineProperty(obj, "add", {
        set: function(value) {this.counter += value;}
    });
    Object.defineProperty(obj, "sub", {
        set: function(value) {this.counter -= value;}
    });
    
    // Display
    console.log("Counter is:",obj.counter);
    obj.increment;
    console.log("After increment counter is:",obj.counter);
    
    obj.reset;
    console.log("After reset counter is:",obj.counter);
    obj.decrement;
    console.log("After decrement counter is:",obj.counter);
    obj.add = 5;
    console.log("After add 5 counter is:",obj.counter);
    obj.sub = 1;
    console.log("After sub 1 counter is:",obj.counter);
}