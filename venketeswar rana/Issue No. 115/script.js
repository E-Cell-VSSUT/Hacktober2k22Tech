let timerOn = true;
function timer(remaining){

var m = Math.floor(remaining / 20);
var s = remaining % 20;
m = m < 10 ? '0' + m : m;
s = s < 10 ? '0' + s : s;

document.getElementById('countdown').innerHTML = 
`Time left : ${m} : ${s}`;
remaining -= 1;
if(remaining >= 0 && timerOn){
    setTimeout(function(){
        timer(remaining);
    }, 1000);

document.getElementById("resend").innerHTML = ``;
return;

}

if(!timerOn){
    return;
}

document.getElementById("resend").innerHTML = `Don't receive the code? <span class= "font-weight-bold text-color cursor"
onclick="timer(20)">resend</span>
`

}

timer(20);

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}