// Get HTM elements
let clapSound = document.querySelector("#clap-sound");
let congratsSound = document.querySelector('#congrats-sound');
let originalTextElement = document.querySelector('#original-text');
let textAreaElement = document.querySelector('#text-area');
let textAreaBorder = document.querySelector('#text-area');
let minutesElement = document.querySelector('#minutes');
let secondsElement = document.querySelector('#seconds');
let resetButton = document.querySelector('#reset');
let congratsElement = document.querySelector('.cong-section');
const textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

let timer = 0;
let minutes = 0;
let seconds = 0;
let interval = 0;
let timerRunning = false;

// Keyup event for TextArea
textAreaElement.addEventListener('keyup',function() {
    let textEnteredLength = textAreaElement.value.length;
    let textEntered = textAreaElement.value;
    let originalText = originalTextElement.textContent;
    let partialText = originalText.substr(0,textEntered.length);

    callTimer(textEnteredLength);
    evaluateText(textEntered,originalText,partialText);

});

// Clear Button Logic
resetButton.addEventListener('click',function() {
    clearInterval(interval);
    resetAllVariables();
    applyColors('gray');
    textAreaElement.value = '';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    congratsElement.style.display = 'none';
    generateRandomText();
});

// call the Timer
let callTimer = (length) => {
    if(length === 1 && !timerRunning){
        // start timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
};

// start Timer
let startTimer = () => {
    timer++;
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));

    minutesElement.textContent = leadingZero(minutes);
    secondsElement.textContent = leadingZero(seconds);
};

// Leading Zero
let leadingZero = (time) => {
    if(time <= 9){
        return "0" + time;
    }
    else{
        return time;
    }
};

let evaluateText = (textEntered,originalText,partialText) => {
    if(textEntered === ''){
        // gray
        applyColors('gray')
    }
    else{
        if(textEntered === originalText){
            applyColors('green');
            clearInterval(interval);
            congratsElement.style.display = 'block';
            congratsSound.play();
        }
        else{
            if(textEntered === partialText){
                // blue
                applyColors('blue');
            }
            else{
                // red
                applyColors('red');
                clapSound.play();
            }
        }
    }
};

// apply colors
let applyColors = (color) => {
    textAreaBorder.style.borderColor = color;
    textAreaBorder.style.boxShadow = `0 0 15px ${color}`;
};

// Reset All the variables
let resetAllVariables = () => {
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    timerRunning = false;
};

// Generate Random Text
let generateRandomText = () => {
    let randomNumber = Math.round(Math.random() * 10);
    let randomString = textArray[randomNumber];
    originalTextElement.textContent = randomString;
};