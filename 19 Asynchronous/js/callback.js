let nl = '\n';
// Callback function
{
    console.log(`Calculator:
        `);
    function calculate(a, b, callback){
        callback(a, b);
    };

    function sum(a,b){
        console.log(`Addition ${a} & ${b} is ${a+b}`);
    }
    function sub(a,b){
        console.log(`Subtraction ${a} & ${b} is ${a-b}`);
    }
    function multi(a,b){
        console.log(`Multiplication ${a} & ${b} is ${a*b}`);
    }
    function div(a,b){
        console.log(`Division ${a} & ${b} is ${a/b}`);
    }

    calculate(1,2,sum);
    calculate(1,2,sub);
    calculate(1,2,multi);
    calculate(1,2,div);

    // Callback hell
    function getData(name, callback){
        setTimeout(()=>{
            console.log(name);
            if(callback){
                callback();
            }
        }, 2000);
    };

    getData('1st Data',()=>{
        getData('2nd Data',()=>{
            getData('3rd Data', ()=>{});
        });
    });
    
}