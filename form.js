const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
//Username logic
    if(usernameValue === ""){
        //show error
        setErrorfor(username, "Username cannot be blank");
    }else{
        // add success class
        setSuccessfor(username);
    }
//Email logic
    if(emailValue === ""){
        //show error
        setErrorfor(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        // add success class
        setErrorfor(email, "Email Not Valid");
    }else{
        setSuccessfor(email);
    }
//Password logic
    if(passwordValue === ""){
        //show error
        setErrorfor(passwordValue, "Password cannot be blank");
    }else{
        // add success class
        setSuccessfor(password);
    }

    if(password2Value === ""){
        //show error
        setErrorfor(password2Value, "Password cannot be blank");
    }else if( passwordValue !== password2Value){
        setErrorfor(password2Value, "Passwords don't match")
    }else{
        // add success class
        setSuccessfor(password2);
    }
    
}

function setErrorfor(input, message){
    const formControl = input.parentElemnt;// form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessfor(input){
    const formControl = input.parentElemnt;
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}