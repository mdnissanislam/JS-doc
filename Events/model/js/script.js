 let btn = document.querySelector('.OMBtn');
 let modelContainer = document.querySelector('.modelContainer');
 let closebtn = document.querySelector('.closeBtn');
 
 btn.addEventListener('click', ()=>{
    modelContainer.style.display = 'flex';
 });

 closebtn.addEventListener('click', ()=>{
    modelContainer.style.display = 'none';
    console.log('modelC');
 });

 modelContainer.addEventListener('click', (e)=>{
    if(e.target.className === 'modelContainer'){
        modelContainer.style.display = 'none';
    }
 });

 let newContainer = document.querySelector('.newContainer');

 newContainer.addEventListener('click', (e)=>{
    if(e.target.classList.contains('items')){
        e.target.style.textDecoration = 'line-through';
    }
 });

// Generate random value
function generateRandomValue(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
for(let i=0; i<200 ; i++){
    console.log(generateRandomValue(5,25));
}

