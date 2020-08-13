
// create a class by name CreditCardValidator with  functions to validate different types of Credit cards
"use strict"

class CreditCardValidator{

    constructor(creditCardNumber){
        this.creditCardNumber = creditCardNumber;
    }

//These functions will validate the six(6) most popular credit cards.


//Validates a Visa Card
    validateVisaCard(){
        let regexVisaCard = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

        if (regexVisaCard.test(this.creditCardNumber)){
            return true;
        } else 
            return false 
        }  
        
        //Validates a MasterCard
    validateMasterCard(){
        let regexMasterCard = /^(?:5[1-5][0-9]{14})$/;

        if(regexMasterCard.test(this.creditCardNumber)){
            return true;
        } else 
            return false 
    }  


         //Validates an AMeX Card
    validateAMeXCard(){
        let regexAmexCard = /^(?:3[47][0-9]{13})$/;

        if(regexAmexCard.test(this.creditCardNumber)){
            return true;
        } else 
            return false 
    }



         //Validates a Discover Card
    validateDiscoverCard(){
        let regexDiscoverCard = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

        if(regexDiscoverCard.test(this.creditCardNumber)){
            return true;
        } else 
            return false 
    }



         //Validates a DinersClub Card
    validateDinersClubCard(){
        let regexDinersClubCard = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;

        if(regexDinersClubCard.test(this.creditCardNumber)){
            return true;
        } else 
            return false 
    }
      
    
    
         //Validates a JCB Card
    validateJCBCard(){
        let regexJCBCard = /^(?:(?:2131|1800|35\d{3})\d{11})$/

        if(regexJCBCard.test(this.creditCardNumber)){
            return true;
        } else 
            return false 
    }


}

module.exports = CreditCardValidator;
