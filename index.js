
let display = document.querySelector(".display");
let buttonPanel = document.querySelector(".buttons");
let calculate = document.getElementById("equal");

buttonPanel.addEventListener("click", function numberToScreen(num){
    button = num.target.id;

    if(button == "C"){
        display.innerHTML = 0;
    }
    else if(display.innerHTML == 0 && button !== "equal"){
        display.innerHTML = button;
    }
    else if(display.innerHTML !== 0 && button !== "equal"){
        display.innerHTML += button;
    }
});

calculate.addEventListener("click", function resolve(){
    let onScreen = display.innerHTML;

    display.innerHTML = eval(onScreen);
})