let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('clcik', (e)=>
    {
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value += buttonText;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}