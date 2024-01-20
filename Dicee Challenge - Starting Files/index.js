var randomNumber1 = Math.floor(Math.random()*6)+1;
var randimg="dice"+randomNumber1+".png";
var diceimg="./images/"+randimg;

var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",diceimg);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randimg2="dice"+randomNumber2+".png";
var diceimg2="./images/"+randimg2;
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",diceimg2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerText="PLAYER 1 WINS";
}
else if(randomNumber1==randomNumber2)
{
    document.querySelector("h1").innerText="DRAW";
}
else{
    document.querySelector("h1").innerText="PLAYER 2 WINS";
}