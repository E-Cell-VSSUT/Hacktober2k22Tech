let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');

btn1.addEventListener('click',() =>{
    document.body.style.backgroundImage = "url('LightTheme.jpg')";
});


btn2.addEventListener('click',() =>{
    document.body.style.backgroundImage = "url('DarkTheme.jpeg')";
});
