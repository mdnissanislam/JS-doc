
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');

// Bubbling phase bottom to top
// one.addEventListener('click', ()=>{
//     alert('You go floor one.');
// });
// two.addEventListener('click', ()=>{
//     alert('You go floor two.');
// });

// three.addEventListener('click', ()=>{
//     alert('You go floor three.');
// });

// Capturing phase top to bottom
// one.addEventListener('click', ()=>{
//     alert('You go floor one.');
// }, true); // by default false
// two.addEventListener('click', ()=>{
//     alert('You go floor two.');
// }, true);

// three.addEventListener('click', ()=>{
//     alert('You go floor three.');
// }, true);

// Note: First run capturing phase

// event.target: Indentifying which child element was clicked or interacted with.

// event.currentTarget: 

// one.addEventListener('click', (e)=>{
//     console.log(e.currentTarget);
//     console.log(e.target);
// });

// two.addEventListener('click', (e)=>{
//     console.log(e.currentTarget);
//     console.log(e.target);
// });

// three.addEventListener('click', (e)=>{
//     console.log(e.currentTarget);
//     console.log(e.target);
//     console.log(this); // similar to currentTarget
// });

// e.stopPropagation();
// console.log('e.stopPropagation():');
// one.addEventListener('click', (e)=>{
//     console.log('One');
// });

// two.addEventListener('click', (e)=>{
//     console.log('Two');
//     e.stopPropagation();
// });

// two.addEventListener('click', ()=>{
//     console.log('New Two.')
// });

// three.addEventListener('click', (e)=>{
//     console.log('Three');
// });

console.log('e.stopImmediatePropagation():');
one.addEventListener('click', (e)=>{
    console.log('One');
});

two.addEventListener('click', (e)=>{
    console.log('Two');
    e.stopImmediatePropagation();
});

two.addEventListener('click', ()=>{
    console.log('New Two.')
})

three.addEventListener('click', (e)=>{
    console.log('Three');
});

// Event delegation
let container = document.querySelector('.container');
container.addEventListener('click', (e)=>{
    let targetE = e.target;
    if(targetE.className === 'number'){
        console.log(targetE.textContent);
    }
})