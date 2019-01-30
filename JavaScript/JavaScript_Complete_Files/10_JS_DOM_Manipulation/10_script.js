let spanTag = document.querySelector('span');
let count = 0;
let liked = () => {
    spanTag.textContent =count;
    count++;
};
// function
let h2Element = document.querySelector('#msg');
let displayMsg = (message,color) => {
    h2Element.textContent = message;
    h2Element.style.backgroundColor = color;
    h2Element.style.color = 'white';
};

let h2NewElement = document.querySelector('#new-msg');
let displayNewMsg= (mesage,color) => {
    h2Element.textContent = message;
    h2Element.style.backgroundColor = color;
    h2Element.style.color = 'white';
};

// Get the GM Element
let gmElement = document.querySelector('#gm');
gmElement.addEventListener('click',function() {
    displayNewMsg('Good Morning','black');
});
let gaElement = document.querySelector('#ga');
gaElement.addEventListener('click',function() {
    displayNewMsg('Good Afternoon','red');
});
let geElement = document.querySelector('#ge');
geElement.addEventListener('click',function() {
    displayNewMsg('Good Evening','blue');
});
let gnElement = document.querySelector('#gn');
gnElement.addEventListener('click',function() {
    displayNewMsg('Good Night','orange');
});


// Image Change
let imageTag = document.querySelector('img');
let changeImage = () => {
    imageTag.setAttribute('src','../img/forest.jpg');
};

