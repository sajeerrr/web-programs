const button = document.getElementById("colorBtn");
const copyBtn = document.getElementById("copyBtn");
const colorText = document.getElementById("colorCode");

function generateColor(){

const letters = "0123456789ABCDEF";
let color = "#";

for(let i=0;i<6;i++){
color += letters[Math.floor(Math.random()*16)];
}

return color;
}

button.addEventListener("click",function(){

const newColor = generateColor();

document.body.style.backgroundColor = newColor;

colorText.textContent = newColor;

});

copyBtn.addEventListener("click",function(){

navigator.clipboard.writeText(colorText.textContent);

copyBtn.textContent="Copied!";

setTimeout(()=>{
copyBtn.textContent="Copy Code";
},1500);

});