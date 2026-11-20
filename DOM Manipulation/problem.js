{    let colorChange = document.querySelector('#colorChange');
    let colorGenerate = document.querySelector('colorGenerate');
    let colorPic = document.querySelector('#colorPic');
    let colorApply = document.querySelector('#colorApply');

    function colorF(color){
        colorChange.style.backgroundColor = color;
    };

    colorApply.addEventListener('click',()=>{
        let color = colorPic.value;
        colorF(color);
    });
}