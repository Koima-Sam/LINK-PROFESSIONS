let users = {
    user1:{
        email:"amos@gmail.com",
        pass:"amos123"
    },
    user2:{
        email:"ronoh@gmail.com",
        pass:"ivyronoh1"
    },
    user3:{
        email:"lincolin@gmail.com",
        pass:"lincon123"

    }
};

//Get users registration details
var fullName = document.Register.fullname.value;
var registerEmail = document.Register.userEmail.value;
var password = document.Register.userPassword.value;
var password2 = document.Register.userPassword2.value;


function valUsers(){

    if(document.login_form.userEmail.value ==""){
        alert("Please indicate your email");
        document.login_form.userEmail.focus();
        return false;

    }
    else if(document.login_form.userPassword.value ==""){
        alert("Please type in your password!");
        document.login_form.userPassword.focus();
        return false;

    }
    else if(document.login_form.userPassword.value.length < 6){
        alert("Your password is lesser than minimum characters");
        document.login_form.userPassword.focus();
        return false
    }
    else{
        if(document.login_form.userEmail.value==users.user1.email && document.login_form.userPassword.value == users.user1.pass){
            alert("Login sucessful");
            
        }
        else if(document.login_form.userEmail.value==users.user2.email && document.login_form.userPassword.value == users.user2.pass){
            alert("Login sucessful");

        }
        else if(document.login_form.userEmail.value==users.user3.email && document.login_form.userPassword.value == users.user3.pass){
            alert("Login sucessful");
    
        }
        else{
            alert("Invalid credentials !")
            document.login_form.userPassword.focus();
            document.login_form.userEmail.focus();
            return false;
        }
    }
}

//Validate users Registering
//Declaring the create user function
function createUser(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(document.Register.fullname.value == ""){
        alert("Please indicate your full name!");
        document.Register.fullname.focus();

    }
    else if(document.Register.userEmail.value == ""){
        alert("Please input a valid email address!");
        document.Register.registerEmail.focus();
        return false;
    }
    else if(document.Register.userPassword.value =="" || document.Register.userPassword2.value ==""){
        alert("Please indicate your password!");
        document.Register.password.focus();
        document.Register.password2.focus();
        return false;

    }
    else if(document.Register.userPassword.value != document.Register.userPassword2.value){
        alert("Passwords are not matching!");
        document.Register.password.focus();
        document.Register.password2.focus();
        return false;

    }
    else{
        // var obj ={}
        // obj.email = document.Register.userEmail.value ;
        // obj.password = document.Register.userPassword.value;
        
        // Object.assign(users.password,)
    }

}