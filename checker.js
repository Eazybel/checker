const mycheckbox = document.getElementById("boxbtn");
const radio1 = document.getElementById("boxbtn1");
const radio2 = document.getElementById("boxbtn2");
const radio3 = document.getElementById("boxbtn3");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.onclick = function(){
    if(mycheckbox.checked){
           para.textContent="subscribed"; 
    }
    else if(radio1.checked){
        para.textContent="youtube"; 
    }
    else if(radio2.checked){
        para.textContent="facebook"; 
    }
    else if(radio3.checked){
        para.textContent="twitter"; 
    }
}