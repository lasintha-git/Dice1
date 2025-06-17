var randomNumber1 = Math.floor(Math.random()*6)+1
console.log(randomNumber1); 
document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(Math.random()*6)+1
console.log(randomNumber2); 
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+randomNumber2+".png");

//Change the Title to Display a Winner
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
};
 


