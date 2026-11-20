let listContainer = document.querySelector('.list-container');
let inputText = document.querySelector('#todoinput');
let addText = document.querySelector('#todobtn');

let list = [
    {
        id: 123,
        text: 'Buy Note book.'
    },
    {
        id: 2356,
        text: 'Help People'
    },
    {
        id: 555,
        text: 'Complete program'
    },
    {
        id: 33,
        text: 'Python'
    }
];

function randerList(obj){
    listContainer.innerHTML = '';
    obj.map(item => {
        let {id,text} = item;
        let ele = document.createElement('div');
        ele.classList.add('list');
        ele.innerHTML = `
            <p>${text}</p>
        `
        let btn = document.createElement('button');
        btn.innerHTML = '✖️';
        ele.append(btn);

        btn.addEventListener('click', ()=>{
            handlerRemoveList(item.id);
        });
        console.log(item.id);
        
        listContainer.append(ele);
    });
}

randerList(list);

function handlerList(){
    let obj = {
        id: Date.now(),
        text: inputText.value
    }
    list.unshift(obj);
    randerList(list);
    inputText.value = '';

};

// remove list
function handlerRemoveList(id){
    let filterList = list.filter(obj =>{
        return obj.id !== id;
    });
    list = filterList
    randerList(list);
}

addText.addEventListener('click', handlerList);

let smallC = document.querySelector('.smallC');
let bigC = document.querySelector('.bigC');

let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
    // smallC.style.left = mouseX + 'px';
    // bigC.style.left = mouseX + 'px';
    // smallC.style.top = mouseY + 'px';
    // bigC.style.top = mouseY + 'px';

});

function animationCursor(){
    let currentX = parseFloat(bigC.style.left) || 0
    let currentY = parseFloat(bigC.style.top) || 0

    let distanceX = mouseX - currentX;
    let distanceY = mouseY - currentY;

    bigC.style.left = currentX + distanceX*0.05 + 'px'
    smallC.style.left = currentX + distanceX*0.05 + 'px'
    bigC.style.top = currentY + distanceY*0.05 + 'px'
    smallC.style.top = currentY + distanceY*0.05 + 'px'
    requestAnimationFrame(animationCursor);

};
animationCursor();