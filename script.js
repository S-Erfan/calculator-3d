const keys = document.querySelectorAll(".key");
const display = document.querySelector(".display");
keys.forEach(item=>{
    item.addEventListener("click",app);
});
// write number in calculator
function app(event){
    let math=event.target.innerText;
    if(display.innerHTML == 0){
        display.innerHTML = math;
    } else{
        display.innerHTML += math;
    }
};
// btns clear
const clear = document.getElementById("ac");
clear.removeEventListener("click",app);
clear.addEventListener("click",clearDisplay);

function clearDisplay(){
    display.innerHTML = 0;
};

const aClear = document.getElementById("c");
aClear.removeEventListener("click",app);
aClear.addEventListener("click",lastClear);

function lastClear(){
    let text = display.innerText
    if(text.length == 1){
        display.innerText = 0;
    }else {
        display.innerText = text.substring(0, text.length-1)
    }
};

// write result 

const equal = document.getElementById("equal");
equal.removeEventListener("click",app);
equal.addEventListener("click", result);
function result(){
    let res = eval(display.innerText);
    display.innerText = res;
};


// change them
const lightTheme = "./style/lightmod.css";
const darkTheme = "./style/darkmod.css";
const mode = document.getElementById("mode");
const them = document.getElementById("them");
mode.addEventListener("click",changeThem);
function changeThem(){
    if(them.getAttribute("href") == darkTheme){
        them.href = lightTheme;
        mode.innerText = "🌙";
    } else {
        them.href = darkTheme;
        mode.innerText = "🌞";
    }
};