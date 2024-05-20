var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNum1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNum2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins";
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw! 🏆";
}