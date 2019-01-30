/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
console.log(`Pi Value : ${Math.PI}`);
// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`The Sqrt : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(65,46,4,651,659,81,9,16,1,61);
console.log(`the Min : ${min}`);

// find the Max of 4 numbers
let max= Math.max(65,46,4,651,659,81,9,16,1,61);
console.log(`the Min : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2,4);
console.log(`pow : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(`Random : ${random}`);


/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let today = new Date();
console.log(today);

// Get proper date
let currentDate = today.toLocaleDateString();
console.log(currentDate);

let currentTime = today.toLocaleTimeString();
console.log(currentTime);

// get full day of the week using switch statement
let day = new Date().getDay();
let fullDay = '';
switch(day){
    case 0:
        fullDay = 'SUNDAY';
        break;
    case 1:
        fullDay = 'MONDAY';
        break;
    case 2:
        fullDay = 'TUESDAY';
        break;
    case 3:
        fullDay = 'WEDNESDAY';
        break;
    case 4:
        fullDay = 'THURSDAY';
        break;
    case 5:
        fullDay = 'FRIDAY';
        break;
    case 6:
        fullDay = 'SATURDAY';
        break;
    default:
        fullDay = 'no-day';
        break;
}
console.log(`Today is : ${fullDay}`);

// Display a Digital Clock on the web page
let indianWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Kolkata'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('en-US',options);
    document.querySelector('#indian-time').textContent = time;
    document.querySelector('#indian-date').textContent = date;
};
setInterval(indianWatch,1000);

let usaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'America/New_York'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('en-US',options);
    document.querySelector('#USA-time').textContent = time;
    document.querySelector('#USA-date').textContent = date;
};
setInterval(usaWatch,1000);

let chinaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Shanghai'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('en-US',options);
    document.querySelector('#china-time').textContent = time;
    document.querySelector('#china-date').textContent = date;
};
setInterval(chinaWatch,1000);


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let minNum = Number.MIN_SAFE_INTEGER;
console.log(`Min : ${minNum}`);

let maxNum = Number.MAX_SAFE_INTEGER;
console.log(`Max : ${maxNum}`);

let num1 = 100;
console.log(`Value : ${num1} Type : ${typeof  num1}`);

let numStr = num1.toString();
console.log(`Value : ${numStr} Type : ${typeof  numStr}`);

numStr = '100.10';
let num2 = parseFloat(numStr);
console.log(`Value : ${num2} Type : ${typeof  num2}`);



/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let message = 'Good Morning';

console.log(`Length : ${message.length}`);
console.log(`SubStr : ${message.substr(0,4)}`);
console.log(`SubStr : ${message.substr(5)}`);
console.log(`CharAt : ${message.charAt(5)}`);
console.log(`CharCodeAt : ${message.charCodeAt(5)}`);

// Example I Count Zeros in  the Given String
let theStr = 'Good Morning';
    function countZeros(str){
        let count = 0;
        for (let i=0; i<=str.length; i++){
            let ch = str.charAt(i);
            if (ch === '0'){
                count++;
            }
        }
        return count;

}
console.log(`The Count is : ${countZeros(theStr)}`);

// Example 2: Reverse  the Given String
theStr = 'Good Morning';
let reverseStr= (str)=>{
    let tempStr = '';
    for (let i = str.length-1; i>=0; i--){
         tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(`Reverse : ${reverseStr(theStr)}`);

// Example 3:  check palindrome or not
theStr = 'GOOD';
let isPalindrome =(str)=>{
    return str ===reverseStr(str);
};
console.log(`Is Palindrome ? ${isPalindrome(theStr)}`);

// Example 4:  convert the String to Palindrome Str
theStr = "ABC";
let convertPalindrome = (str)=> {
    let tempStr = str;
    for (let i = str.length - 1; i >= 0; i--) {
        tempStr += str.charAt(i);
    }
    return tempStr;
};

console.log(`Palindrome Str : ${convertPalindrome(theStr)}`);

//Example 5: convert to word Number
let theNumber = '666';
let wordNumber = (str) =>{
    let tempStr = '';
    for (let i=0; i<= str.length; i++){
        let digit =parseInt(str.charAt(i));
        switch (digit){
            case 0:
            tempStr += 'ZERO';
            break;
            case 1:
                tempStr += 'ONE';
                break;
            case 2:
                tempStr += 'TWO';
                break;
            case 3:
                tempStr += 'THREE';
                break;
            case 4:
                tempStr += 'FOUR';
                break;
            case 5:
                tempStr += 'FIVE';
                break;
            case 6:
                tempStr += 'SIX,';
                break;
            case 7:
                tempStr += 'SEVEN';
                break;
            case 8:
                tempStr += 'EIGHT';
                break;
            case 9:
                tempStr += 'NINE';
                break;
        }
    }
    return tempStr;
};
console.log(wordNumber(theNumber));

//Example 6: wordNumberNew
theNumber = '950';
let array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let newWordStr = (str) => {
    let tempStr = '';
    for(let i = 0; i< str.length; i++){
        tempStr += array[parseInt(str.charAt(i))] + ' ';
    }
    return tempStr;
};
console.log(newWordStr(theNumber));

// Example 7 : Convert to number to Palindrome Word
theNumber = '123';
let displayPalindromeWord = (str) => {
    return newWordStr(convertPalindrome(str));
};
console.log(displayPalindromeWord(theNumber));

// Example 8: TriangleOne String
theStr = 'SHANKAR SRIRAMULA';
let triangleOne = (str) => {
    let tempStr = '';
    for(let i=1; i<= str.length; i++)
    {
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(theStr));

// Example 9 : TriangleTwo String
theStr = "SHANKAR SRIRAMULA";
let triangleTwo = (str) => {
    let tempStr = '';
    for(let i= 0; i< str.length; i++){
        tempStr += `${addSpace(i)} ${str.substr(i)} \n`;
    }
    return tempStr;
};

let addSpace = (number) => {
    let tempSpace = '';
    for(let i=0; i<number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};
console.log(triangleTwo(theStr));

// Example 10 : TriangleThree
theStr = 'SHANKAR SRIRAMULA';
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=0; i--)
    {
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleThree(theStr));

// Example 11 : TriangleFour
theStr = 'SHANKAR SRIRAMULA';
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += `${addSpace(i)} ${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleFour(theStr));

// Example 12 : TriangleStars
theNumber = 10;
let displayTriangle = (number) => {
    let tempStr = '';
    for(let i=1; i<= number; i++){
        for(let j=1; j<=i; j++){
            tempStr += '*';
        }
        tempStr += '\n';
    }
    return tempStr;
};
console.log(displayTriangle(theNumber));

