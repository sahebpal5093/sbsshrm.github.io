var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");
var Form4 = document.getElementById("Form4");
var Form5 = document.getElementById("Form5");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Next3 = document.getElementById("Next3");
var Next4 = document.getElementById("Next4");

var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Back3 = document.getElementById("Back3");
var Back4 = document.getElementById("Back4");

var progress = document.getElementById("progress");

Next1.onclick = function(){
    Form1.style.left = "-1250px";
    Form2.style.left = "40px";
    progress.style.width = "500px";
}
Back1.onclick = function(){
    Form1.style.left = "40px";
    Form2.style.left = "1250px";
    progress.style.width = "250px";
}
Next2.onclick = function(){
    Form2.style.left = "-1250px";
    Form3.style.left = "40px";
    progress.style.width = "720px";
}
Back2.onclick = function(){
    Form2.style.left = "40px";
    Form3.style.left = "1250px";
    progress.style.width = "500px";
}

Next3.onclick = function(){
    Form3.style.left = "-1250px";
    Form4.style.left = "40px";
    progress.style.width = "920px";
}
Back3.onclick = function(){
    Form3.style.left = "40px";
    Form4.style.left = "1250px";
    progress.style.width = "720px";
}

Next4.onclick = function(){
    Form4.style.left = "-1250px";
    Form5.style.left = "40px";
    progress.style.width = "1250px";
}
Back4.onclick = function(){
    Form4.style.left = "40px";
    Form5.style.left = "1250px";
    progress.style.width = "920px";
}
const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });

