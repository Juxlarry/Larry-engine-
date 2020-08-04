// create a class by name PhoneNumberValidator with 1 function called validatePhoneNumber
"use strict"

class PhoneNumberValidator{

    constructor(phoneNumber){
        this.phoneNumber = phoneNumber;
    }

//This function will validate phone number according to the Ghana system

    validatePhoneNumber(){

        let regex = /^0\(?([2|3|5])\)?([0|2|4|5|6|7|9])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{1,4})$/;

        if (regex.test(this.phoneNumber)){
            return true;
        }
        else
            return false;

    }

}

module.exports = PhoneNumberValidator;
