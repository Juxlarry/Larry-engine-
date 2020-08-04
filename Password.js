// A class by name PasswordValidator with 1 function called validatePassword
"use strict"

class PasswordValidator{

    constructor(password){
        this.password = password;
    }

//This function will validate a password string to have at least one lowercase, one uppercase, one digit and one special character.
// The string can be 8 characters to 32 characters long

    validatePassword(){

        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;

        if (regex.test(this.password)){
            return true;
        }
        else
            return false;

    }

}



module.exports = PasswordValidator;





