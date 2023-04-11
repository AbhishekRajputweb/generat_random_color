var container = document.querySelector('.container');
var colorCard = document.querySelector('.color-card');
var btn = document.querySelector("button");
var hex = document.querySelector("span");

function getNewColor(){
    var symbols = '0123456789ABCDEF'; //16 symbols

    //to generate color with combination


    var color = '#';

    for(var i = 0; i<6; i++){
        color = color + symbols[Math.floor(Math.random() * 16)];
    };

    //body
    document.getElementById("body").style.background = color;
    document.getElementById("color-card").style.background = color;
    document.getElementById("hex").innerHTML = color;
    
}

btn.addEventListener("click",getNewColor)