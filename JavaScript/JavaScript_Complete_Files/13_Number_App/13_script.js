// Get the HTML Elements
let textBoxElement = document.querySelector('#number');
let displayElement = document.querySelector('#text-number');
 
// Keyup Event for InputBox
textBoxElement.addEventListener('keyup',function () {
    let theStr = newWordStr(textBoxElement.value);
    displayElement.textContent = theStr;
});


let array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let newWordStr = (str) => {
    let tempStr = '';
    for(let i = 0; i< str.length; i++){
        tempStr += array[parseInt(str.charAt(i))] + ' ';
    }
    return tempStr;
};
