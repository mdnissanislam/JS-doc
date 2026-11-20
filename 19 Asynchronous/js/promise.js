{    
    let p1 = new Promise((resolve, reject)=>{
        // resolve()
        reject('Hi');
    })
    console.log(p1);

    // p1.then((data)=>{
    //     console.log(data);
    // });

    // p1.catch((err)=>{
    //     console.log(err);
    // });

    p1.then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}
{
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name: 'Black Hole'
            })
        }, 1000);
    });

    p2.then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}
{
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject({
                name: 'Black Hole'
            })
        }, 2000);
    });

    p2.then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.error(err);
    });
}
{
    function fetchData(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve({
                    name: 'Ali Khan'
                })
            }, 3000)
        })
    }

    let result = fetchData();

    result.then((data) =>{
        console.log(data);
    }).catch((err)=>{
        console.error(err);
    })
}
{
    function fetchData(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                reject({
                    name: 'Ali Khan'
                })
            }, 4000)
        })
    }

    let result = fetchData();

    result.then((data) =>{
        console.log(data);
    }).catch((err)=>{
        console.error(err);
    })
}
{
    function fetchData(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve({
                    name: 'First Data'
                })
            }, 5000)
        })
    }
    function fetchData2(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve({
                    name: 'Second Data'
                })
            }, 1000)
        })
    }
    

    let result = fetchData();

    result.then((data) =>{
        console.log(data);
        let response = fetchData2();
        response.then((data)=>{
            console.log(data);
        })
    }).catch((err)=>{
        console.error(err);
    })
}
{
    function fetchData(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve({
                    name: 'Data Find.'
                })
            }, 7000);
        })
    }
    function fetchData2(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve({
                    name: 'New Data'
                })
            }, 2000)
        })
    }
    
    fetchData()
    .then((data) =>{
        console.log('Phase 01: ', data);
        return fetchData2();
    }).then((data)=>{
        console.log('Phase 02: ', data);
        return fetchData2();
    }).then((data)=>{
        console.log('Phase 03: ', data);
        return fetchData2();
    }).then((data)=>{
        console.log('End phase: ', data);
    }).catch((err)=>{
        console.error(err);
    })
}
{
    // Real word senario
    function getUsers(callback){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://6897ec0fddf05523e55dc456.mockapi.io/p1/baby');

        xhr.onload = function () {
            if (xhr.status === 200) {
                const users = JSON.parse(xhr.responseText);
                callback(null, users);
            } else {
                callback(`Error: ${xhr.status}`)
            }
        };

        xhr.onerror = function () {
            callback(`Network error`);
        };
    
        xhr.send();
    };

    function showData(err, data) {
        if(err){
            console.log('Failed: ', err);
        } else {
            console.log('Success: ', data);
        }
    };

    // Using the function
    getUsers(showData);  
}

{
    let response = fetch('https://6897ec0fddf05523e55dc456.mockapi.io/p1/baby');
    response
    .then(async (data)=>{
        console.log(await data.json());
    }, 10000)
    .catch(err=>{
        console.log(err);
    })
}