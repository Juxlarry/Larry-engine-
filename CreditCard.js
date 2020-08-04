
// create a class by name CreditCardValidator with 1 function called validateCreditCard
"use strict"

class CreditCardValidator{

    constructor(creditCardNumber){
        this.creditCardNumber = creditCardNumber;
    }

//This function will validate the six(6) most popular credit cards.
//Validates a Visa Card, a MasterCard, an American Express Card, a Discover Card, a Diners Club card and a JCB card.


    validateCreditCard(){

        let regexVisaCard = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        let regexMasterCard = /^(?:5[1-5][0-9]{14})$/;
        let regexAmexCard = /^(?:3[47][0-9]{13})$/;
        let regexDiscoverCard = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
        let regexDinersClubCard = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
        let regexJCBCard = /^(?:(?:2131|1800|35\d{3})\d{11})$/

        if (regexVisaCard.test(this.creditCardNumber)){
            return true;
        }
        else if(regexMasterCard.test(this.creditCardNumber)){
            return true;
        }
        else if(regexAmexCard.test(this.creditCardNumber)){
            return true;
        }
        else if(regexDiscoverCard.test(this.creditCardNumber)){
            return true;
        }
        else if(regexDinersClubCard.test(this.creditCardNumber)){
            return true;
        }
        else if(regexJCBCard.test(this.creditCardNumber)){
            return true;
        }
        else
            return false;

    }

}

module.exports = CreditCardValidator;
