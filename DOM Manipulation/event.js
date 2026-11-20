// We can handle event using following three methods:
// inline method

let btn2 = document.querySelector('.btn2');
// Property method
btn2.onlick = ()=>{
    console.log('Property method.');
}
// Listener method
btn2.addEventListener('dblclick', ()=>{
    console.log('Listener method.') ;
});

// create a function
let showMessage = ()=>{
    console.log('Hi I am Black.');
}
let removeMessage = ()=>{
    console.log('Hi I am Hole.');
}
// add function
btn2.addEventListener('click', showMessage);
btn2.addEventListener('click', removeMessage);

// remove function
btn2.removeEventListener('click', removeMessage);

let btn3 = document.querySelector('.btn3');
// event obj
btn3.addEventListener('click', (event)=>{
    // console.log(event);
    console.log(event);
});

// Most used events:
// Mouse events:
    // click, dblclick
    // mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout, mousemove, contextmenu
// Keyboard events:
    // keydown, keypress, keyup
// Form events:
    // submit: Form is submitted,
    //  reset:Form is reset,
    //  focus: Element receives focus,
    //  blur: Element loses focus,
    //  input: Value changes[real-time],
    //  change: Value of form element changes(on blur)
// Touch events:
    // touchstart: Finger touches the screen,
    // touchmove: Finger moves on screen,
    // touchend: Finger is removed from screen
    // touchcancel: Touch interrupted
// Window events:
    // load, DOMContentLoaded, resize, scroll
// Clipboard events:
    // copy: Content is copied.
    // cut: Content is cut.
    // paste: Content is pasted.

    {
        let btn = document.querySelector('.btn4');
        // Mouse events
        btn.addEventListener('mouseenter', ()=>{
            console.log('Mouse enter.');
        });
        btn.addEventListener('mouseleave', ()=>{
            console.log('Mouse leave.');
        });
        btn.addEventListener('mousedown', ()=>{
            console.log('Mouse down.');
        });
        btn.addEventListener('mouseup', ()=>{
            console.log('Mouse up.');
        });
        btn.addEventListener('mousemove', ()=>{
            console.log('Mouse move.');
        });
        // Key events:
        btn.addEventListener('keydown', ()=>{
            console.log('Key down.');
        });
        btn.addEventListener('keyup', ()=>{
            console.log('Key up.');
        });
        btn.addEventListener('keypress', ()=>{
            console.log('Key press.');
        });
    }