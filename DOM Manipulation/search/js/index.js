let userContainer = document.querySelector('.user-container');
let inputId = document.querySelector('#inputId');

const users = [
    {
        profileURL: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
        name: 'Ali Khan',
        email: 'alikhan@gmail.com'
    },
    {
        profileURL: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Ajad Ali',
        email: 'ajadali@gmail.com'
    },
    {
        profileURL: 'https://media.istockphoto.com/id/1323167284/photo/young-successful-indian-man-wearing-stylish-eyeglasses-standing-on-the-street-handsome-asian.jpg?s=170667a&w=0&k=20&c=RmFpHJBfMvjBxwnHhrns8Ba02HIeL70l1LA9Wl23II4=',
        name: 'Labib Khan',
        email: 'labibkhan@gmail.com'
    },
        {
        profileURL: 'https://static.vecteezy.com/system/resources/thumbnails/046/776/978/small/handsome-young-asian-man-in-a-blue-suit-and-yellow-tie-standing-confidently-on-a-city-street-photo.jpg',
        name: 'Limon',
        email: 'limon@gmail.com'
    },
    {
        profileURL: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Setu',
        email: 'setu@gmail.com'
    },
    {
        profileURL: 'https://us.123rf.com/450wm/deagreez/deagreez1911/deagreez191100159/133166621-photo-lat%C3%A9rale-de-profil-d-un-homme-d-affaires-%C3%A9l%C3%A9gant-avec-un-traitement-de-coiffeur-toucher-un.jpg?ver=6',
        name: 'Nahid',
        email: 'nahid@gmail.com'
    }
    
];

function randerResult(users){
    userContainer.innerHTML='';
    users.map((obj)=>{
        // destructure
        let {profileURL,name,email} = obj;
        
        let userItem = document.createElement('div');
        userItem.className = 'user-item';
        userItem.innerHTML = `
                        <div class="user-image">
                            <img src="${profileURL}">
                        </div>
                        <div class="user-info">
                            <h2 class="user-name">${name}</h2>
                            <h5 class="user-email">${email}</h5>
                        </div>
        `
        userContainer.append(userItem);
    });
}
randerResult(users); // initial

function handleSearch(e){
    let searchValue = e.target.value;
    let filterUser = users.filter(obj =>{
        return ( 
            obj.name.toLocaleLowerCase().includes(searchValue.toLowerCase())
            || obj.email.toLocaleLowerCase().includes(searchValue.toLowerCase())
        )
    });
    // console.log(filterUser);
    randerResult(filterUser); // filter
}

inputId.addEventListener('input', handleSearch);