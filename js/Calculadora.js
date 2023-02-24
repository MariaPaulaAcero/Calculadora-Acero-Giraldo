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
        case 'C':
            deleteNumeber(display);
            break;
        case '=':
            calculateInfo(display);
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

function deleteNumeber(display){
    display.innerHTML = 0;

}
