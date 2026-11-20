let time1 = document.querySelector('.time1');
let time2 = document.querySelector('.time2');
let time3 = document.querySelector('.time3');
let time4 = document.querySelector('.time4');

function updateTime(){
    let date = new Date();
    let apm = (date.getHours()<12)? 'AM':'PM';
    time1.textContent = date.getHours() + 'h :';
    time2.textContent = date.getMinutes() + 'm :';
    time3.textContent = date.getSeconds() + `s ${apm}`;
}

// updateTime();

setInterval(updateTime, 1000);