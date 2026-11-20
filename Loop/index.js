{
    let label = document.querySelector('.label');
    label.innerHTML = '';
    
    loop1 : for(let i = 0; i < 10; i++){
        loop2 : for(let j = 0; j < 10; j++){
            let div = document.createElement("div");
            div.innerHTML = `<h1>Number is ${j}</h1>`;
            label.append(div);
            console.log(`${j}`);
            if(j === 3){
                break loop1;
            }
        }
    }
}