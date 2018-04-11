var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bodyBkg");
var initialColors = document.querySelector("body");

console.log(body.getAttribute("background"));



color1.addEventListener("input", setLinearGradientColor);
color2.addEventListener("input", setLinearGradientColor);

function setLinearGradientColor(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}
