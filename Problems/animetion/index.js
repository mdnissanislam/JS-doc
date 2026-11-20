{
    let wheel = document.querySelector('.wheel');
    let b1 = document.querySelector('#speed1');
    let b2 = document.querySelector('#speed2');
    let b3 = document.querySelector('#speed3');
    let b4 = document.querySelector('#speed4');
    let start = document.querySelector('#start');
    let stop = document.querySelector('#stop');
    
    let v1 = '5s';
    let v2 = '2s';
    let v3 = '.5s';
    let v4 = '.05s';
    let fanStart = 'On';
    let fanStop = 'Off';

    b1.addEventListener('click', ()=>{
        wheel.style.animationDuration = v1;
    });
    b2.addEventListener('click', ()=>{
        wheel.style.animationDuration = v2;
    });
    b3.addEventListener('click', ()=>{
        wheel.style.animationDuration = v3;
    });
    b4.addEventListener('click', ()=>{
        wheel.style.animationDuration = v4;
    });
    start.addEventListener('click', ()=>{
        wheel.style.animation = 'start 5s linear .3s infinite';
    });
    stop.addEventListener('click', ()=>{
        wheel.style.animation = 'none';
    });
    
}