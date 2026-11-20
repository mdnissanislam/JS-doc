{
    // Problem-01: Reverse sentence word
    let sentence = "Hi, I am Black";
    let reverseSentence = sentence.split(' ').map(word=>{
        let reverseWord = word.split('').reverse().join('');
        return reverseWord;
    }).join(' ');

    console.log(`${reverseSentence}`);
}
{
    // Problem-02: Reverse number
    let num = 12345;
    function revNum(num){
        let rev = num.toString().split('').reverse().join('');
        return Number(rev);
    }
    console.log(revNum(num));
}
{
    // Problem-03: Get the number of occurrences of each letter
    let names = 'Hi, I am Black. Can I help you with your project';
    function occu(names){
        let obj = {};
        names.split('').forEach(e => {
            if(obj.hasOwnProperty(e.toLowerCase())){
                obj[e.toLowerCase()]++;
            }else{
                obj[e.toLowerCase()] = 1;
            }
        });
        return obj;
    };

    let result = occu(names);

    console.log(result);
}
{
    // Problem-04: Capitalize all word in a sentence
    let name = "hi i am black";
    const capitalize = (name)=>{
         let result = name.split(' ').map(word=>{
            return word.charAt(0).toUpperCase() + word.slice(1);
         });
         return result.join(' ');
    };
    console.log(capitalize(name));
}
{
    // Problem-05: Swap two value
    let a = [1,2];
    let b = a.reverse();
    console.log(b);
    console.log(typeof b);
    console.log(Array.isArray(b));
}

{
    // Form validation
    let name = document.querySelector('#name');
    let nameR = document.querySelector('#nameR');
    let nameE = document.querySelector('#nameE');
    let email = document.querySelector('#email');
    let emailR = document.querySelector('#emailR');
    let emailE = document.querySelector('#emailE');
    let password = document.querySelector('#password');
    let showPass = document.querySelector('.fbtn');

    name.addEventListener('input', (e)=>{
        let result = e.target.value;
        if(result.length > 2){
            nameR.textContent = result;
            nameE.textContent = '';
        } else {
            nameE.textContent = 'Please Mustbe use 3 letter';
        }
    });
    email.addEventListener('input', (e)=>{
        let result = e.target.value;
        let isTrue = result.endsWith('@gmail.com');
        
        if(isTrue){
            emailR.textContent = result;
            emailE.textContent = '';
        } else {
            emailE.textContent = 'Email is invalid.';
        }
    });

    showPass.addEventListener('click', ()=>{
        let passType = password.type;
        if(passType === 'password'){
            password.type = 'text';
            showPass.textContent = 'Hide';
        } else {
            password.type = 'password';
            showPass.textContent = 'Show';

        }
    })
    
}

{
    // Side bar
    let sideBar = document.querySelector('.sidebar');
    let sideBtn = document.querySelector('.sidebtn');
    let isShow = true;

    sideBtn.addEventListener('click', ()=>{

        // console.log(typeof sbw);
        if(isShow){
            isShow = false;
            // sideBar.style.display = 'none'
            sideBar.style.width = '0px';
        } else {
            isShow = true;
            sideBar.style.width = '250px';
            // sideBar.style.display = 'block'
        }
        console.log(isShow)
    })
}

{
    // Update a List
    
    // Add a item
    let list = ['name','age'];
    function renew(item){
        const newList = [...list, item];
        return newList;
    }
    
    // Remove last item
    function remove(item){
        const newList = item.slice(0, -1);
        return newList;
    }
    
    let newList = renew('email');
    console.log(newList);
    let updateList = remove(newList);
    console.log(updateList);
}
{
    // Don't Iterate (Imperatively)
    // Avoid for, while etc Use map, filter reduce

    let arr = [1,2,3,4];
    const evens = arr.filter(n => n%2 == 0);
    console.log(evens);
}

{
    {    
        // Loose coupling
        let endpoint = 'https://jsonplaceholder.typicode.com/todos/1';
        
        function getData(api){
            return fetch(api).then(res => res.json());
        }

        function fetchData(api, route){
            fetch(`${api}/${route}`);
        }

        getData(endpoint);

        let user = 'user';
        let product = 'product';
        let likes = 'likes';

        fetchData(endpoint, user);
        fetchData(endpoint, product);
        fetchData(endpoint, likes);
    }
    // Or
    {
        function fetchData(fn){
            let endpoint = 'https://jsonplaceholder.typicode.com/todos/1';
            fn(endpoint);
        }
    
        function getUser(api){
            fetch(`${api}/user`);
        };
    
        function getProduct(api){
            fetch(`${api}/product`);
        };
        
        fetchData(getUser);
    
        fetchData(getProduct);
    }
}

{
    {   
        // Notification
        function sendEmail(user){
            console.log(`Email send to: ${user.email}`);
        }
        function sendSms(user){
            console.log(`Message send to what's app : ${user.phone}`);
        }
        
        let user = {
            name: 'Black',
            email: 'Black@gmail.com',
            phone: 124567158
        }

        sendEmail(user);
        sendSms(user);
    }
    // Or
    {
        // reuseable function
        let user = {
            name: 'Black',
            email: 'Black@gmail.com',
            phone: 124567158
        }

        function sendMessage(msg, sendTo){
            console.log(`${msg}: ${sendTo}`);
        }

        sendMessage("Email send to:", user.email);
        sendMessage("SMS send to:", user.phone);
        sendMessage("What's app send to:", user.phone);
    }
    // Or
    {
        let user = {
            name: 'Black',
            email: 'Black@gmail.com',
            phone: 124567158
        };

        function sendEmail(user){
            console.log(`Email send to: ${user.email}`);
        };

        function sendSms(user){
            console.log(`Message send to what's app : ${user.phone}`);
        };
        
        function sendMessage(notify){
            notify(user);
        };

        sendMessage(sendEmail);
        sendMessage(sendSms);
    }

}
{
    // Reuse or compose logic
    const toLower = str => str.toLowerCase();
    const removeSpaces = str => str.replaceAll(' ','');
    const atTheRate = str => '@' + str;

    let str = "Black Hole";
    let result = atTheRate(removeSpaces(toLower(str)));

    console.log(str);
}

{
    // First class, callback, higher order function
    function hello(){
        return 'Hello';
    }

    let newResult = hello();

    // First class function: Which function can assign a variable, using as a parameter and can return.

    function Hi(){
        return 'Hi';
    }
    // sort form
    let hi = () => 'Hi';

    // Callback function: Which function using in a higher order function

    function greetWithName(fn, name){
        return fn() + ' ' + name;
    }
    // Higher order function: Which function using another function as a parameter

    let resultHi = greetWithName(Hi, 'Black');
    let resultHello = greetWithName(hello, 'Black');
    console.log(resultHi);
    console.log(resultHello);
}

{
    // A simple function that returns a string (e.g., a prefix)
    const getPrefix = () => "Dr.";

    const newName = fn => name => `${fn()} ${name}`;
    
    // Call newName with the getPrefix function.
    // This call returns a new function that is waiting for a 'name' argument.
    const getDoctorName = newName(getPrefix);
    
    // Now, call the returned function with a name.
    const fullName = getDoctorName("Smith");
    
    console.log(fullName); // Output: "Dr. Smith"
    
}

{
    // How do you use .reduce()

    let money = [1,2,3,4,5,6,7,8,9];

    let result = money.reduce((a, c)=>{
        return a+c
    },0);

    console.log(result);
}

{
    // Without change old obj value udate in a new array
    let user = {
        name: 'Black',
        age: 22
    }
    
    function updateName(user, name){
        let newObj = {...user, name};
        return newObj;
    }
    
    console.log(updateName(user, 'Hole'));
}

{
    // method chaining
    let str = 'Black';
    let reverseStr = str.split('').reverse().join('');
    console.log(reverseStr);

    let add = n => n+2;
    let multi = n => n*2;
    let sub = n => n-2;

    // compose -> right to  reduceRight()
    // pipe -> left to right reduce()

    // compose
    function compose(...funs){
        return val => {
            return funs.reduceRight((acc,currFn)=>{
                return currFn(acc);
            },val);
        }
    };
    
    // pipe
    function pipe(...funs){
        return val => {
            return funs.reduce((acc,currFn)=>{
                return currFn(acc);
            },val);
        }
    };

    let result = compose(sub,multi,add)(2);
    let result2 = pipe(sub,multi,add)(2);
    console.log(result);
    console.log(result2);
}

{
    // Create you own map
    let arr = [1,2,3,4,5];
    let calculator = (logic)=>{
        let newArr = [];
        for(let i=0; i<arr.length; i++){
            newArr.push(logic(arr[i]));
        }
        return newArr;
    }

    Array.prototype.myMap = calculator;
    console.log(arr.myMap((e)=>e));

}

{
    // .every() return true if all element true
    let number = [1,3,3,1,2,3];

    let ataKiNumberArray = number.every((e)=>{
        return typeof e === 'number'; 
    });
    console.log(`This is number array: ${ataKiNumberArray}`);

    // .find() return value if available
    let resultFind = number.find((e)=>{
        return e === 1;
    });

    console.log(resultFind);
}

{
    // Create a filter function
    let number = [1,2,3,4,5,6];

    // let logic = e => e%2 === 0;

    let result = (fn=>{
        let newArr = [];
        for(let i = 0; i<number.length; i++){
            if(fn(number[i])){
                newArr.push(number[i]);
            }
        }
        return newArr;
    });
    Array.prototype.myFilter = result;
    let resultF = number.myFilter((e=>e%2 === 0));
    console.log(resultF);
}