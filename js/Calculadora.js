window.addEventListener('load', ()=>{
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');


    const keypadButtonsArray = Array.from(keypadButtons);
    keypadButtonsArray.forEach(button => {
        button.addEventListener('click', ()=> {
            calculadora(button, display);
        
            
        });
    }) 
});

function calculadora(button, display) {
    switch(button.innerHTML) {
        case 'AC':
            deleteNumber(display);
            break;
        case 'DEL':
            deleteLastNumber(display);
            break;
        case '=':
            calculateInfo(display);
            break;
        case '%':
            calculatePercentage(display);
            break;
        default:
            update(display, button);
            break;
    
    }
}


function calculateInfo(display){
   display.innerHTML= eval(display.innerHTML);
}

function update(display, button){
    if (display.innerHTML == 0){
        display.innerHTML = '';

    }
    display.innerHTML += button.innerHTML;
}

function deleteNumber(display){
    display.innerHTML = 0;

}

function deleteLastNumber(display){
    display.textContent = display.textContent.substr(0, display.textContent.length-1);
    if (display.innerHTML == ''){
        display.innerHTML = 0;
    }
    
}

function calculatePercentage(display){
    display.innerHTML = display.innerHTML/100;
}


