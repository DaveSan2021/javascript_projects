let display = document.getElementById('display')

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        
        let currentValue = 0; 

        switch(e.target.innerText) {
            case 'C':
                top_display.innerText = '';
                bottom_display.innerText = '';
                break;
            case '←':
                if(bottom_display.innerText) {
                    bottom_display.innerText = bottom_display.innerText.slice(0,-1);
                }
                break;  
            case '=':
                try {
                    bottom_display.innerText += e.target.innerText;
                    top_display.innerText += bottom_display.innerText;

                    currentValue = evaluate(top_display.innerText);
                    bottom_display.innerText = currentValue;
                } catch {
                    bottom_display.innerText = 'Error';
                }

                break;
            case '×': 
                bottom_display.innerText += e.target.innerText;
                top_display.innerText = bottom_display.innerText;
                break;
            default:
                bottom_display.innerText += e.target.innerText;
       }
    });
});

function evaluate() {

    if () 
    
}