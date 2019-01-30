// If Else condition Example
let courseCompleted = true;
let practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You Wil get the job soon');
}
else if(courseCompleted && !practiceCompleted){
    console.log('Start practicing');
}
else{
    console.log('Please join any course');
}


// For loop Example to display from 1 - 10 values
let output = '';
for(let i = 0; i<= 10; i++){
    if(i <= 9){
        output += i + ' , ';
    }
    else{
        output += i;
    }
}
console.log(output);


// While loop Example to display from 1 - 10 values
output = '';
let i = 0;
while(i <= 10){
    if(i <= 9){
        output += i + ' - ';
    }
    else{
        output += i;
    }
    i++;
}
console.log(output);


// Do while loop Example to display from 1 - 10 values
output = '';
i = 0;
do{
    if(i <= 9){
        output += i + ' ^ ';
    }
    else{
        output += i;
    }
    i++;
}
while(i <= 10);
console.log(output);


// Switch Statement Example
let month = 3;
switch(month){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('not matched');
        break;
}
