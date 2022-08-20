let screen = document.getElementById('screen');
buttons = document.querySelector('button');
let screenValue = '';

for(item of buttons)
{
    item.addEventListener('click', (e) =>{
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value += buttonText;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            SVGCircleElement.value += screenValue;
        }
    })
}