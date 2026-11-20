let nl = '\n';
{    
    // Synchronous:
        // Execution Flow: Line by line
        // Blocking : Yes
        // Use cases: Simple tasks, calculations

    console.log(`Welcome to synchronous code.`);
    console.log(`End synchronous.`)
        
    // Asynchronous:
        // Execution Flow: Skips long tasks, comes back
        // Blocking : No
        // Use cases: API calls, DB queries, timers

    setTimeout(() => {
        console.log(`Welcome to asynchronous code.`); 
    }, 1); // milisecond
    console.log(`Start from here.`);

    // api
    async function fetchdata () {
        let result = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await result.json();
        console.log(data);
    }

    fetchdata();
    console.log(`Waiting for this `);

    // mockapi.io
    /*
        Http method:
            POST: Add new data
            GET: Get/fetch existing data
            PUT/PATCH? Update full data : Update spacific data
            DELETE: Remove existing data
    */
}
console.log(nl);
// To Do list
{
    let listContainer = document.querySelector('.list-container');
    let inputText = document.querySelector('#todoinput');
    let addText = document.querySelector('#todobtn');

    // api
    let api = 'https://6897ec0fddf05523e55dc456.mockapi.io/p1/baby';

    async function fetchData() {
        let result = await fetch(api);
        let data = await result.json();
        // console.log(data);
        randerList(data);
    }
    fetchData();

    // Show data
    function randerList(obj){
        listContainer.innerHTML = '';
        obj.map(item => {
            let {id,name} = item;
            let ele = document.createElement('div');
            ele.classList.add('list');
            ele.innerHTML = `
                <p class= "myP">${id}. ${name}</p>
                <input type="text" id="edit" class="edit" value="${item.name}">
                <button type="button" class="dbtn">Delete</button>
                <button type="button" class="ebtn">Edit</button>
                <button type="button" class="sbtn">Save</button>
            `
            let paragraph = ele.querySelector('.myP');
            let edit = ele.querySelector('#edit');
            let dbtn = ele.querySelector('.dbtn');
            let ebtn = ele.querySelector('.ebtn');
            let sbtn = ele.querySelector('.sbtn');

            dbtn.addEventListener('click', ()=>{
                handlerRemoveList(item.id);
            });

            ebtn.addEventListener('click', ()=>{
                ebtn.style.display = 'none';
                sbtn.style.display = 'block';
                paragraph.style.display = 'none';
                edit.style.display = 'inline';
            });
            
            sbtn.addEventListener('click', async ()=>{
                let eidtValue = edit.value;
                let response = await updateData(id, eidtValue);
                if(response.status === 200){
                    ebtn.style.display = 'block';
                    sbtn.style.display = 'none';
                    paragraph.style.display = 'block';
                    edit.style.display = 'none';
                }
            });
            
            
            // console.log(item.id);
            
            listContainer.append(ele);
        });
    }

    // Add data
    async function postData() {
        let value = inputText.value;
        value.trim();
        console.log(value.length);
        if(value === null||value.length === 0){
            return;
        }
        let objData = {
            name: value
        }

        let response = await fetch(api,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objData),
        });
        // console.log(response);
        if(response.status === 201){
            fetchData();
        }
        inputText.value = '';
    };

    // Update data
    async function updateData(id, value) {
        value.trim();
        if(value === null||value.length === 0){
            return;
        };
        let obj = {
            name: value,
        };
        let response = await fetch(`${api}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })

        if(response.status === 200){
            fetchData();
        }
        return response;
    }

    // Delete data
    async function handlerRemoveList(id){
        let response = await fetch(`${api}/${id}`,{
            method: 'DELETE',
        });
        
        if(response.status === 200){
            fetchData();
        }
    }

    addText.addEventListener('click', postData);
}
console.log(nl);