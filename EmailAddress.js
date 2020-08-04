// create a class by name EmailAddressValidator with 1 function called validateEmailAddress
"use strict"

class EmailAddressValidator{

    constructor(emailAddress){
        this.emailAddress = emailAddress;
    }

//This function will validate an email address

    validateEmailAddress(){

        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (regex.test(this.emailAddress)){
            return true;
        }
        else
            return false;

    }

}



module.exports = EmailAddressValidator;





