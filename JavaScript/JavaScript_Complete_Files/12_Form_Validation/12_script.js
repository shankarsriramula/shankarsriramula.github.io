// Get the  HTML Elements
let userNameElement = document.querySelector('#username');
let emailElement = document.querySelector('#email');
let passwordElement = document.querySelector('#passwod');
let confirmPasswordElement = document.querySelector('#password_confirm');

// Get the Error Elements
let userNameErrorElement = document.querySelector('#name_error');
let emailErrorElement = document.querySelector('#email_error');
let passwordErrorElement = document.querySelector('#password_error');
let message ='';

// Event for UserName Field
userNameElement.addEventListener('blur',function () {
    clearErrorMessage(userNameElement,userNameErrorElement);
});
emailElement.addEventListener('blur',function () {
    clearErrorMessage(emailElement,emailErrorElement);
});
passwordElement.addEventListener('blur',function () {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});
confirmPasswordElement.addEventListener('blur',function () {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmPasswordElement,passwordErrorElement);
});
let validate = () => {
    let isvalid = true;

    // Required UserName
    if (userNameElement.value === '') {
        message = 'User Name is Required';
        displayErrorMessage(userNameElement, userNameErrorElement, message);
        isvalid = false;
        return isvalid;
    }

    // UserName Length
    if (userNameElement.value.length < 5) {
        message = 'Enter at least 5 letters';
        displayErrorMessage(userNameElement, userNameErrorElement, message);
        isvalid = false;
        return isvalid;
    }

    //RegExp Validation
    if (!userNameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)) {
        message = 'Pattern is not Matched';
        displayErrorMessage(userNameElement, userNameErrorElement, message);
        isvalid = false;
        return isvalid;
    }

    // Required Email
    if (emailElement.value === '') {
        message = 'Email is Required';
        displayErrorMessage(emailElement, emailErrorElement, message);
        isvalid = false;
        return isvalid;
    }

    // Required Password
    if (passwordElement.value === '') {
        message = 'Password is Required';
        displayErrorMessage(passwordElement, passwordErrorElement, message);
        isvalid = false;
        return isvalid;
    }

    //Required Confirm Password
    if (confirmPasswordElement.value === '') {
        message = 'Confirm Password is Required';
        displayErrorMessage(confirmPasswordElement, passwordErrorElement, message);
        isvalid = false;
        return isvalid;
    }

    // Password Match Validation
    if (passwordElement.value !== confirmPasswordElement.value) {
        message = "Passwords didn't Match";
        displayErrorMessage(confirmPasswordElement,passwordErrorElement,message);
        displayErrorMessage(passwordElement, passwordErrorElement, message);
        isvalid = false;
        return isvalid;
    }

    if(isvalid) {
        alert('Form Submitted Successfully');
        return true;
    }
    else {
        return false;
    }
};

// display Error Message
let displayErrorMessage = (inputElement,errorElement,message) => {
    inputElement.style.borderColor = 'red';
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.boxShadow = "0 0 10px red";
    errorElement.textContent = message;
    errorElement.style.color = "red";
};

// Clear Error Message
let clearErrorMessage = (inputElement,errorElement) => {
    inputElement.style.borderColor = 'gray';
    inputElement.style.backgroundColor = 'white';
    inputElement.style.boxShadow = "0 0 0 white";
    errorElement.textContent = '';
};

