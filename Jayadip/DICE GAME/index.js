
var random;

random=6*Math.random();
random=Math.floor(random)+1;
if(random==1)
    document.querySelector("img.img1").setAttribute("src","dice1.png");
else if(random==2)
    document.querySelector("img.img1").setAttribute("src","dice2.png");
else if(random==3)
    document.querySelector("img.img1").setAttribute("src","dice3.png");
else if(random==4)
    document.querySelector("img.img1").setAttribute("src","dice4.png");    
else if(random==5)
    document.querySelector("img.img1").setAttribute("src","dice5.png");
else
    document.querySelector("img.img1").setAttribute("src","dice6.png"); 




var random1;
random1=7*Math.random();
random1=Math.floor(random1)+1;
if(random1==1)
    document.querySelector("img.img2").setAttribute("src","dice1.png");
else if(random1==2)
    document.querySelector("img.img2").setAttribute("src","dice2.png");
else if(random1==3)
    document.querySelector("img.img2").setAttribute("src","dice3.png");
else if(random1==4)
    document.querySelector("img.img2").setAttribute("src","dice4.png");    
else if(random1==5)
    document.querySelector("img.img2").setAttribute("src","dice5.png");
else
    document.querySelector("img.img2").setAttribute("src","dice6.png"); 

if (random>random1)
 {
    document.querySelector("h1").innerHTML="Player1 Wins";
 }  
else if (random1>random)
 {
    document.querySelector("h1").innerHTML="Player2 Wins";
 }  
else if(random==random1)
  document.querySelector("h1").innerHTML="Draw";

