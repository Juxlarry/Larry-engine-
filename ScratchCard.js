// create a class by name ScratchCardValidator with 1 function called validateScratchCard
"use strict"

class ScratchCardValidator{

    constructor(scratchCard){
        this.scratchCard = scratchCard;
    }

//This function will validate scratch card number

    validateScratchCardNumber(){

        let regex =  (/^[0-9]+$/) ;


        if (regex.test(this.scratchCard)) {
            return true;
        }
        else
            return false;

    }

}

module.exports = ScratchCardValidator;
