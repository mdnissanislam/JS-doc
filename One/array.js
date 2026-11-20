let newLine = "\n";
{
  {    
    // An array containing numbers
    const numArr = [0, 1, 2, 3];

    // An array containing names
    const cars = ["BMW", "Audi", "TATA", "Tesla"];

    // An array containing different data types
    const mixedArray = [1, 'chicken', false];

    numArr[4] = 4;
    cars[3] = "Honda";

    console.log(numArr);
    console.log(cars);

    // Create a nested array
    console.log(`2D Array: `);
    const user = [
        ["Ali Khan", "Abdul Aziz", "Azad Islam"],
        [22,24,34],
        ["Dhaka, Bangladesh","Dhilli, India","London, Us"]
    ];
    const name = 0;
    const nameName = 1;
    console.log(`User name: ${user[name][nameName]}`);

    // More levels of nesting
    console.log(`3D Array: `);
    const threeD = [
      [
        ['Rock', 'Pop'],
        ['Country', 'Hip Hop']
      ],
      [
        ['Soul', 'Classic'],
        ['Electronic', 'Folk']
      ]
    ];
    console.log(threeD[0][1][1]); // Hip Hop
  }
  console.log(newLine);
  {
    // using new keyword
    console.log(`new keyword: `);
    const cars = new Array("BMW","Volvo","TATA","Audi");
    console.log(`${cars}`);
    // There is no need to use new Array().
    
    // For simplicity, readability and execution speed, use the array literal method.
  }
  console.log(`\n`);
  {
    // Accessing array elements
    console.log(`Destructuring Assignment: `);
    // Create an array
    const fruits = [`Banana`, `Orange`, `Apple`, `Mango`];
    // Destructuring Assignment
    let [one, two, three, four] = fruits;
    console.log(one);
    console.log(two);
    console.log(three);
    let fruit = fruits[0];
    console.log(`${fruit}`);
    // Changing an Array Element
    fruits[0] = "Malta";
    console.log(fruits[0]);
    let text = fruits.toString();
    console.log(`Converting an Array to a string: ${text}`);
    // Access the full array
    console.log(`Access full array: ${fruits}`);
  }
  console.log(`\n`);
  {
    // Array elements be objects
    const cars = ["BMW","Audi","Volvo"];
    const cars1 = ["BMW","Audi","Volvo", "TATA"];
    const myArr = [];
    myArr[0] = cars;
    myArr[1] = cars1;
    console.log(myArr);
  }
  console.log(`\n`);
  {
    // Looping array elements
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let text = "<ul>";
    for(let i=0; i<fruits.length; i++){
      text += "<li>" + fruits[i] +"</li>";
    }
    text += "</ul>";
    document.getElementById(`array1`).innerHTML = text;
    // forEach();
    let text1 = "<ul>";
    fruits.forEach(myFunction);
    text1 += "</ul>";
    function myFunction(value){
      text1 += "<li>"+value+"</li>";
    }
    document.getElementById("array2").innerHTML = text1;
    // Adding element
    fruits[fruits.length] = "Malta";
    console.log(`Adding element: ${fruits}`);
  }
}
console.log(`\n`);
{
  // Array methods/prototype and properties
  console.log(`Array properties: `);
  const fruits = ["Banana", "Mango", "Malta", "Watermelon", "Apple"];
  console.log(`length: ${fruits.length}`);
  console.log(`Array methods: `);
  console.log(`Array: ${fruits}`);
  console.log(`sort(): ${fruits.sort()}`);
  fruits.push("Lemon");
  console.log(`Adding new element using push("Lemon"): ${fruits}`);
  console.log(`Array.isArray(fruits): ${Array.isArray(fruits)}`); // true
  console.log(`\n`);
  console.log(`The difference between arrays and objects:
    In JavaScript, arrays use numbered indexes.
    In JavaScript, objects use named indexes.`);
    console.log(`
      JavaScript has a built-in array constructor new Array().
      But you can safely use [] instead.`);
      
      let myNumber = [1,2,3,4,5,6];
      console.log(`My array is ${myNumber}`);
      // splice();
      // splice(start index, remove items count);
      // splice(start index, remove items count, add items, add items...);
      console.log(`myNumber.splice(2,2,7,8) now we remove items: ${myNumber.splice(2,2,7,8)}`);
      console.log(`We update 3,4 to 7,8 array is ${myNumber}`);
      let names = ["Ali","Kali","Tale"];
      let names2 = ["Oli","Oali","Oale"];
      console.log(names);
      console.log(names2);
      let names3 = names.concat(names2);
      console.log(`${names3.slice("")}`);
      console.log(`\n`);
      {
        // Spread Operator
        console.log(`Spread Operator: `);
        const myArr = [1,2,3,4];
        const myArr1 = [1,2,3,4];
        const myArr2 = [1,2,3,4];
        const result = [...myArr,...myArr1,...myArr2];
        console.log(result);
        const q1 = ["Jan", "Feb", "Mar"];
        const q2 = ["Apr", "May", "Jun"];
        const q3 = ["Jul", "Aug", "Sep"];
        const q4 = ["Oct", "Nov", "May"];
        const year = [...q1, ...q2, ...q3, ...q4];
        console.log(`${year}`);
      }
      const q1 = ["Jan", "Feb", "Mar"];
      const q2 = ["Apr", "May", "Jun"];
      const q3 = ["Jul", "Aug", "Sep"];
      const q4 = ["Oct", "Nov", "May"];
      const year = [...q1, ...q2, ...q3, ...q4];
      console.log(`\n`);
      {
        // arr.find(function(){});
        console.log(`Using find() method: `);
        console.log(year);
        let txt = year.find((month)=>{
          console.log(`${month}`);
        });
        let month = year.find((month) =>{
          return month === "Jan3";
        });
        console.log(`${month}`);
      }
      console.log(`\n`);
      {
        // arr.flat();
        console.log(`arr.flat():`);
        console.log(`The flat() method creates a new array with sub-array elements concatenated to a specified depth.`);
        const arr = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
        console.log(`Normal array:`);
        console.log(arr);
        console.log(`arr.flat():`);
        let arr2 = arr.flat(); // by default flat(1);
        console.log(arr2);
        console.log(`arr.flat(2):`);
        arr2 = arr.flat(2);
        console.log(arr2);
        console.log(`arr.flat(3):`);
        arr2 = arr.flat(3);
        console.log(arr2);
        console.log(`arr.flat(Infinity):`);
        arr2 = arr.flat(Infinity);
        console.log(arr2);
      }
      console.log(`\n`);
      {
        // arr.sort();
        console.log(`arr.sort(): `);
        const arr = [10,20,2,1,5];
        arr.sort((a,b)=>{
          return a-b; // if n 
        });
        console.log(`Ascending order: ${arr}`);
        arr.sort((a,b)=>{
          return b-a;
        });
        console.log(`Descending order: +${arr}`);
      }
      console.log(`\n`);
      {
        // arr.map(function);
        // return value without condition
        console.log(`arr.map(function): `);
        let arr = [1,2,3,4,5];
        let newArr = arr.map((value,index,arr)=>{
          console.log(value,index,arr);
          return value*3;  
        });
        console.log(newArr);
      }
      console.log(newLine);
      {
        // arr.filter(function);
        // if condition is true then return only array value or elements
        console.log(`arr.filter(function): `);
        let arr = [1,2,3,4,5];
        let newArr = arr.filter((value,index,arr)=>{
          console.log(value,index,arr);
          return value%2 === 0;
        });
        console.log(newArr);
      }
      console.log(newLine);
      {
        // arr.reduce(function);
        // sum elements
        console.log(`arr.reduce(function): `);
        let arr = [1,2,3,4,5];
        let newArr = arr.reduce((value,index,arr)=>{
          console.log(value,index,arr);
          return value%2 === 0;
        });
        console.log(newArr);
      }
      console.log(newLine);
      {
        // string to array using Array.from(str);
        let str = "Hello";
        let str2 = Array.from(str);
        console.log("String to array: ",str2);
        str2 = str2.reverse();
        console.log("Reverse array: ",str2);
        console.log("Reverse array is array: ",Array.isArray(str2)); // true
        let str3 = str2.join(""); // olleH
        console.log("Join array: ", str3);
        console.log("Join array type: ",typeof str3);
        console.log(str3);
      }
      console.log(newLine);
      {
        let nameis = 'hello world can you tell me'
        let newName = nameis.split(" ").map((ele)=>{
          return ele.charAt(0).toUpperCase() + ele.slice(1);
        });
        console.log(newName.join(" "));
      }
    }
    console.log(newLine);