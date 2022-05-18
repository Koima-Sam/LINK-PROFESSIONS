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

console.log()


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