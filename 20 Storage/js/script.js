/*
    *Both local storage and session storage are part of the
    Web storage api used to store key-value pairs
*/

/*
    Setting data:
    localStorage.setItem('username','Black');
    sessionStorage.setItem('sessionId','Black');

    Getting data:
    localStorage.getItem('username');
    sessionStorage.getItem('sessionId');

    Removing data:
    localStorage.removeItem('username');
    sessionStorage.removeItem('sessionId');
    
    Clearing all data:
    localStorage.clear();
    sessionStorage.clear();
     
    Getting key:
    localStorage.key(1) index

    Getting length:
    localStorage.length
*/
let isLogIn = false;
// set item
localStorage.setItem('isLogIN', JSON.stringify(isLogIn));
// get item
JSON.parse(localStorage.getItem('isLogIN'));

// create a array
let arr = [1,2,3,4];
// set item
localStorage.setItem('arr', JSON.stringify(arr));
// get item
JSON.parse(localStorage.getItem('arr'));

// Important
// create a obj
let obj = {
    name: 'Black Hole',
    age: 22
};
// set item
localStorage.setItem('obj', JSON.stringify(obj));
// get item
JSON.parse(localStorage.getItem('obj'));

