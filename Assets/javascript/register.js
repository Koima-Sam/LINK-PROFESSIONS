var fullName = document.Register.fullname.value;
var email = document.Register.userEmail.value;
var password = document.Register.userPassword.value;
var password2 = document.Register.userPassword2.value;

var users = {}

//Declaring the create user function
function createUser(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(fullName ==""){
        alert("Please indicate your full name!");
        document.Register.fullname.focus();
        return false;

    }
    else if(email == "" || !(email.match(mailformat))){
        alert("Please input a valid email address!");
        document.Register.email.focus();
        return false;
    }
    else if(password =="" || password2 ==""){
        alert("Please indicate your password!");
        document.Register.password.focus();
        document.Register.password2.focus();
        return false;

    }
    else if(password != password2 ){
        alert("Passwords are not matching!");
        document.Register.password.focus();
        document.Register.password2.focus();
        return false;

    }
    else{
        
    }

}