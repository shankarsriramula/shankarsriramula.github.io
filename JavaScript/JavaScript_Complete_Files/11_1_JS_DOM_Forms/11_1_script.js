let submitButton = document.querySelector('#submit-button');
let textBox = document.querySelector('#user');
let spanTag = document.querySelector('#span');
submitButton.addEventListener('click',function () {
    let textEntered = textBox.value;
    spanTag.textContent = textEntered;
});

// Keyup Event for TextBox
textBox.addEventListener('keyup',function() {
    let textEntered = textBox.value;
    spanTag.textContent = textEntered;
    if(textEntered === 'shankar'){
        spanTag.style.color = 'green';
        textBox.style.boxShadow = '0 0 15px green';
        textBox.style.borderColor = 'lightgreen';
    }
    else{
        spanTag.style.color = 'red';
        textBox.style.boxShadow = '0 0 15px red';
        textBox.style.borderColor = 'orangered';
    }
});