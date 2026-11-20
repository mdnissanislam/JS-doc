let nl = '\n';
// Obj
let obj = {
    'name': "Abdul Ali",
    'age': 33,
};

// obj to json
let json = JSON.stringify(obj);
console.log('Json form: ',json);
console.log(nl);
let newObj = JSON.parse(json);
console.log('New obj form: ',newObj);
console.log(nl);
async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(await response.json());
}

fetchData();